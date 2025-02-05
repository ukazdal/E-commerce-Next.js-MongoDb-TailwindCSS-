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
      }
         ${diseable ? "text-gray-400 cursor-not-allowed opacity-50" : ""} 
          ${
            outline
              ? "border border-gray-300  text-neutral-900 md:hover:bg-neutral-900 md:hover:text-white"
              : "bg-neutral-900 text-white md:hover:text-neutral-900 md:hover:bg-white"
          }
         `}
    >
      {text}
    </button>
  );
};

export default Button;
