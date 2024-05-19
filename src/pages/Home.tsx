import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
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
      <Button className="mt-10">Resume Game</Button>
    </>
  );
};

export default Home;
