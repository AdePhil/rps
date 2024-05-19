import {
  GameHistory,
  GameMode,
  GameState,
  Move,
  Player,
} from "@/modules/game/types";
import {
  GAME_HISTORY_KEY,
  createPlayer,
  generateComputerChoice,
  getGameResult,
} from "@/modules/game/utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props =
  | {
      gameMode: GameMode;
      setGameMode: (mode: GameMode | undefined) => void;
      resume?: boolean;
    }
  | {
      gameMode?: undefined;
      setGameMode: (mode: GameMode | undefined) => void;
      resume: boolean;
    };
const useRockPaperScissors = ({ gameMode, setGameMode, resume }: Props) => {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  const [gameState, setGameState] = useState<GameState>(
    GameState.PlayerDetails
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!resume) return;
    const history = JSON.parse(
      localStorage.getItem(GAME_HISTORY_KEY) || "null"
    ) as GameHistory | null;
    if (!history) return;
    setPlayer1(history.player1);
    setPlayer2(history.player2);
    setGameState(GameState.Playing);
    setGameMode(history.gameMode as GameMode);
  }, []);

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
      saveGameState({ player1: firstPlayer, player2: secondPlayer });
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
      const updatedPlayers = updatePlayerScores(currentPlayer, computer);
      saveGameState(updatedPlayers);
      setGameState(GameState.Result);
      return;
    }

    if (player1?.choice) {
      const updatedPlayers = updatePlayerScores(player1, currentPlayer);
      saveGameState(updatedPlayers);
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

  const saveGameState = ({
    player1,
    player2,
  }: {
    player1: Player;
    player2: Player;
  }) => {
    const history = { player1, player2, gameMode };
    localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify(history));
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
