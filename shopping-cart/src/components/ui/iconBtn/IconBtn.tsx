import "./IconBtn.scss"

type StyleProps = {
    style?: React.CSSProperties
}

type IconBtnProps = {
    children: React.ReactNode
}

const IconBtn = (props: IconBtnProps & StyleProps) => {
  return (
    <button className="btn" style={props.style}>
        {props.children}
    </button>
  )
}

export default IconBtn