import { GameContent, GameModeSelection } from "@/modules/game/components";
import { GameMode } from "@/modules/game/types";
import { useState } from "react";

const Game = () => {
  const [mode, setMode] = useState<GameMode | undefined>(undefined);

  if (mode) {
    return <GameContent gameMode={mode} setGameMode={setMode} />;
  }

  return <GameModeSelection setMode={setMode} />;
};

export default Game;
