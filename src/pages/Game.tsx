import { Button } from "@/components";

const Game = () => {
  return (
    <>
      <img
        className="w-[280px] object-contain my-[40px] rotate-[-20deg]"
        alt="rock paper scissor"
        src="/rps.png"
      />
      <h2 className="text-xl">Game Mode</h2>
      <Button className="mt-10">1 Player</Button>
      <Button className="mt-10">2 Player</Button>
      <Button className="mt-10">Back</Button>
    </>
  );
};

export default Game;
