type ContainerPropsType = {
  children: React.ReactNode;
  className?: string;
  style?: { [i in string]: string };
};

export default function Container({
  children,
  className = '',
  style = {},
}: ContainerPropsType) {
  return (
    <div style={style} className={`container ${className}`}>
      {children}
    </div>
  );
}
