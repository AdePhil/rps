import { Button } from "@/components";
import { Move, Player } from "@/modules/game/types";

const moves = Object.keys(Move).filter((v) => isNaN(Number(v)));

type Props = {
  player: Player | null;
  handlePlayerChoice: (move: Move, player: Player | null) => void;
  restartGame: () => void;
};
const GameMoveSelection = ({
  player,
  handlePlayerChoice,
  restartGame,
}: Props) => {
  return (
    <>
      <h1 className="text-2xl text-center mt-10">Your Move {player?.name}</h1>
      <div className="flex flex-[0.5] gap-5 mt-10 flex-wrap items-center justify-center">
        {moves.map((move, i) => (
          <button
            key={i}
            className=" w-[200px] h-[200px] text-black bg-white transition-all  hover:bg-red-500 hover:text-white text-2xl flex items-center justify-center"
            onClick={() => {
              handlePlayerChoice(Move[move as keyof typeof Move], player);
            }}
          >
            {move}
          </button>
        ))}
      </div>
      <Button className="mt-10 mx-auto" onClick={restartGame}>
        Restart
      </Button>
    </>
  );
};

export default GameMoveSelection;
