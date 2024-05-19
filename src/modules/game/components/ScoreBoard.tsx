type Props = {
  player1: { name: string; score: number };
  player2: { name: string; score: number };
};

const ScoreBoard = ({ player1, player2 }: Props) => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <h3>
          {player1!.name}: {player1!.score} - {player2!.name}: {player2!.score}
        </h3>
      </div>
    </>
  );
};

export default ScoreBoard;
