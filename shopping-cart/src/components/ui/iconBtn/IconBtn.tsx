import "./IconBtn.scss";

type IconBtnProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className: string;
  handleClick: () => void;
};

const IconBtn = ({ children, style, className, handleClick }: IconBtnProps) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={handleClick}>
      {children}
    </button>
  );
};

export default IconBtn;
