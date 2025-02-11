interface IAuthContainer {
  children: React.ReactNode;
  className?: string;
}

const AuthContainer: React.FC<IAuthContainer> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-1 items-center justify-center m-auto h-full w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default AuthContainer;
