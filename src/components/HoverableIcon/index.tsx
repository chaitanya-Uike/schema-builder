import "./style.css";

interface Props {
  Icon: React.FC;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function HoverableIcon({ Icon, onClick, style }: Props) {
  return (
    <div className="hoverableIconContainer" onClick={onClick} style={style}>
      <Icon />
      <div className="hoverableIconBackdrop"></div>
    </div>
  );
}

export default HoverableIcon;
