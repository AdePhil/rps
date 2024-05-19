import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`bg-white text-black px-8 py-4 rounded-md text-2xl w-[300px] hover:bg-red-500 hover:text-white transition-all  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
