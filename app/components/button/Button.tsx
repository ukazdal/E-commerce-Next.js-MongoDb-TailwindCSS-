import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon: IconType;
  diseable?: boolean;
}

const Button = ({text, onClick, small, outline, diseable icon:Icon}) => {
  return (
    <button
      onClick={() => {}}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Buton
    </button>
  );
};

export default Button;
