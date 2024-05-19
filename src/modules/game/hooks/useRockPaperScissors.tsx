import { GameMode, GameState, Move, Player } from "@/modules/game/types";
import {
  createPlayer,
  generateComputerChoice,
  getGameResult,
} from "@/modules/game/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  gameMode: GameMode;
  setGameMode: (mode: GameMode | undefined) => void;
};

const useRockPaperScissors = ({ gameMode, setGameMode }: Props) => {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  const [gameState, setGameState] = useState<GameState>(
    GameState.PlayerDetails
  );
  const navigate = useNavigate();

  const handlePlayerCreation = (name: string) => {
    let firstPlayer = player1;
    let secondPlayer = player2;

    if (!player1) {
      firstPlayer = createPlayer({ name, isComputer: false });
      setPlayer1(firstPlayer);
    }

    if (gameMode === GameMode.SINGLE_PLAYER) {
      secondPlayer = createPlayer({ name: "Computer", isComputer: true });
      setPlayer2(secondPlayer);
    } else if (player1 && gameMode === GameMode.TWO_PLAYER) {
      secondPlayer = createPlayer({ name, isComputer: false });
      setPlayer2(secondPlayer);
    }

    if (firstPlayer && secondPlayer) {
      setGameState(GameState.Playing);
    }
  };

  const handlePlayerChoice = (move: Move, player: Player | null) => {
    if (!player) return;
    const currentPlayer = { ...player, choice: move };
    if (player1?.id === player.id) setPlayer1(currentPlayer);
    if (player2?.id === player.id) setPlayer2(currentPlayer);

    if (player2?.isComputer && !player1?.choice) {
      const computerChoice = generateComputerChoice();
      const computer = { ...player2, choice: computerChoice };
      setPlayer2(computer);
      updatePlayerScores(currentPlayer, computer);
      setGameState(GameState.Result);
      return;
    }

    if (player1?.choice) {
      updatePlayerScores(player1, currentPlayer);
      setGameState(GameState.Result);
    }
  };

  const updatePlayerScores = (player1: Player, player2: Player) => {
    const { winner } = getGameResult(player1, player2) || {};
    let firstPlayer = player1;
    let secondPlayer = player2;

    if (winner?.id === player1.id) {
      firstPlayer = { ...player1, score: player1.score + 1 };
      setPlayer1(firstPlayer);
    } else if (winner?.id === player2.id) {
      secondPlayer = { ...player2, score: player2.score + 1 };
      setPlayer2(secondPlayer);
    }
    return { player1: firstPlayer, player2: secondPlayer };
  };

  const continueGame = () => {
    if (player1 && player2) {
      setPlayer1({ ...player1, choice: undefined });
      setPlayer2({ ...player2, choice: undefined });
      setGameState(GameState.Playing);
    } else {
      restartGame();
    }
  };

  const restartGame = () => {
    setPlayer1(null);
    setPlayer2(null);
    setGameMode(undefined);
    navigate("/game", { state: { resume: false } });
  };

  return {
    gameState,
    handlePlayerChoice,
    handlePlayerCreation,
    player1,
    player2,
    continueGame,
    restartGame,
  };
};

export default useRockPaperScissors;
