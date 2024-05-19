import {
  GameMoveSelection,
  GameResult,
  PlayerDetailsForm,
} from "@/modules/game/components";
import useRockPaperScissors from "@/modules/game/hooks/useRockPaperScissors";
import { GameState } from "@/modules/game/types";

type Props = ReturnType<typeof useRockPaperScissors>;
const GameStateContent = ({
  gameState,
  player1,
  player2,
  handlePlayerChoice,
  continueGame,
  restartGame,
  handlePlayerCreation,
}: Props) => {
  if (gameState === GameState.PlayerDetails) {
    return (
      <PlayerDetailsForm
        handlePlayerCreation={handlePlayerCreation}
        placeholder={!player1 ? "Player 1" : "Player 2"}
        restartGame={restartGame}
      />
    );
  }

  if (gameState === GameState.Playing) {
    return (
      <GameMoveSelection
        player={player1?.choice ? player2 : player1}
        handlePlayerChoice={handlePlayerChoice}
        restartGame={restartGame}
      />
    );
  }
  if (gameState === GameState.Result && player1 && player2) {
    return (
      <GameResult
        player1={player1}
        player2={player2}
        continueGame={continueGame}
        restartGame={restartGame}
      />
    );
  }
};

export default GameStateContent;
