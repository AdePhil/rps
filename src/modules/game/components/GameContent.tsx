import { GameMode } from "@/modules/game/types";

type GameContentProps = {
  gameMode?: GameMode;
  setGameMode: (mode: GameMode | undefined) => void;
};

const GameContent = ({ gameMode, setGameMode }: GameContentProps) => {
  return (
    <>
      <h1>Game Content</h1>
      <p>Form Goes here</p>
    </>
  );
};

export default GameContent;
