import { Button } from "@/components";
import { Move, Player } from "@/modules/game/types";
import { getGameResult } from "@/modules/game/utils";
import Confetti from "react-confetti";

type Props = {
  player1: Player;
  player2: Player;
  continueGame: () => void;
  restartGame: () => void;
};

const GameResult = ({ player1, player2, continueGame, restartGame }: Props) => {
  const { winner, loser, winnerChoice, loserChoice, drawChoice } =
    getGameResult(player1, player2);
  return (
    <>
      {winner && (
        <h1 className="text-3xl mt-10 capitalize">{winner.name} wins!</h1>
      )}
      {winner && loser && (
        <h3 className="text-lg mt-2">
          {winner.name} picked {Move[winnerChoice]}, {loser.name} picked{" "}
          {Move[loserChoice]}
        </h3>
      )}
      {!winner && <h1 className="text-3xl mt-10">It's a draw! 🧐</h1>}
      {!winner && (
        <h3 className="text-lg mt-2">You both picked {Move[drawChoice]}</h3>
      )}
      <>{winner && <Confetti run />}</>
      <Button className="mb-8 mt-10" onClick={continueGame}>
        Continue
      </Button>
      <Button onClick={restartGame}>Restart</Button>
    </>
  );
};

export default GameResult;
