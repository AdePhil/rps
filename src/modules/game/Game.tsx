import { GameContent, GameModeSelection } from "@/modules/game/components";
import { GameMode } from "@/modules/game/types";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [mode, setMode] = useState<GameMode | undefined>(undefined);
  const location = useLocation();
  const resume = location?.state?.resume;

  if (resume || mode) {
    return (
      <GameContent gameMode={mode} setGameMode={setMode} resume={resume} />
    );
  }

  return <GameModeSelection setMode={setMode} />;
};

export default Game;
