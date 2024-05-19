import { GameStateContent, ScoreBoard } from "@/modules/game/components";
import useRockPaperScissors from "@/modules/game/hooks/useRockPaperScissors";
import { GameMode } from "@/modules/game/types";

type Props = {
  gameMode?: GameMode;
  setGameMode: (mode: GameMode | undefined) => void;
  resume: boolean;
};

const GameContent = ({ gameMode, setGameMode, resume }: Props) => {
  const result = useRockPaperScissors({ gameMode, setGameMode, resume });
  const { player1, player2 } = result;

  return (
    <>
      {player1 && player2 && <ScoreBoard player1={player1} player2={player2} />}
      <GameStateContent {...result} />
    </>
  );
};

export default GameContent;
