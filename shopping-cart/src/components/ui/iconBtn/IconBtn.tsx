import "./IconBtn.scss"

type IconBtnProps = {
    children: React.ReactNode
}

const IconBtn = (props: IconBtnProps) => {
  return (
    <button className="cart-wrapper">
        {props.children}
    </button>
  )
}

export default IconBtn