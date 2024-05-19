import { Button } from "@/components";
import { GameMode } from "@/modules/game/types";
import { useNavigate } from "react-router-dom";

type Props = {
  setMode: (mode: GameMode) => void;
};
const GameModeSelection = ({ setMode }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        className="w-[280px] object-contain my-[40px] rotate-[-20deg]"
        alt=""
        src="/rps.png"
      />
      <h2 className="text-xl">Game Mode </h2>
      <Button className="mt-10" onClick={() => setMode(GameMode.SINGLE_PLAYER)}>
        1 Player
      </Button>
      <Button className="mt-10" onClick={() => setMode(GameMode.TWO_PLAYER)}>
        2 Player
      </Button>
      <Button className="mt-10" onClick={() => navigate("/")}>
        Back
      </Button>
    </>
  );
};

export default GameModeSelection;
