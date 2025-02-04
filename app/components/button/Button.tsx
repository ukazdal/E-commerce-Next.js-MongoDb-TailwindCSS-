interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  //icon?: IconType;
  diseable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  diseable,
  //icon: Icon,
}) => {
  return (
    <button
      disabled={diseable}
      onClick={onClick}
      className={`rounded-lg  px-3 py-3 hover:shadow-lg duration-300 ${
        small ? "w-[200px]" : "w-full"
      } ${outline ? "border text-black" : "bg-black text-white"}`}
    >
      {text}
    </button>
  );
};

export default Button;
