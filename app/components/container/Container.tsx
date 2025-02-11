interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <div className={`my-5 px-2 lg:px-0 mx-auto max-w-[1460px]  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
