import { Button } from "@/components";
import { hasGameHistory } from "@/modules/game/utils";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const showResumeButton = hasGameHistory();
  return (
    <>
      <img
        className="w-[280px] object-contain my-[40px] rotate-[-20deg]"
        alt=""
        src="/rps.png"
      />
      <Button className="mt-10" onClick={() => navigation("/game")}>
        New Game
      </Button>
      {showResumeButton && (
        <Button
          className="mt-10"
          onClick={() => navigation("/game", { state: { resume: true } })}
        >
          Resume Game
        </Button>
      )}
    </>
  );
};

export default Home;
