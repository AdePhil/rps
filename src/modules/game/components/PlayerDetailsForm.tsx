import { Button } from "@/components";
import { useState } from "react";

type Props = {
  handlePlayerCreation: (name: string) => void;
  placeholder: string;
  restartGame: () => void;
};
const PlayerDetailsForm = ({
  handlePlayerCreation,
  placeholder,
  restartGame,
}: Props) => {
  const [name, setName] = useState<string>("");

  const handleButtonClick = () => {
    handlePlayerCreation(name);
    setName("");
  };
  return (
    <>
      <div className="mt-10">
        <input
          type="text"
          id="playerName"
          name="playerName"
          className="block px-10 py-5 w-[350px] text-2xl rounded-md bg-white text-black"
          placeholder={`Enter name for ${placeholder}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button className="mt-10 w-[350px]" onClick={handleButtonClick}>
        Continue
      </Button>
      <Button className="mt-10 w-[350px]" onClick={restartGame}>
        Restart
      </Button>
    </>
  );
};

export default PlayerDetailsForm;
