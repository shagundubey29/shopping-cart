import { IProducts } from "../../models/IProducts";
import IconBtn from "../ui/iconBtn/IconBtn";
import { FaCartShopping } from "react-icons/fa6";
import "./ProductCard.scss";
import { useState } from "react";

type CardProps = IProducts & {
  cardColor: string;
}

interface ImgContainerProps{
  id:number,
  img: string,
  title: string
  cardColor: string
}

const ImgContainer = ({img, title, cardColor, id} : ImgContainerProps) : JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [addCart, setAddCart] = useState(null);

  const handleClick = () : void=> {
    setActive(prevActive => !prevActive);
  }

  return(
    <div className="img-container" style={{backgroundColor: cardColor}}>
        <img src={img} alt={title} />
        <div className="cart"> 
          <div>+</div>
          <IconBtn 
          style={{ position:"absolute", bottom:"-12%", right:"12%"}} 
          className={active ? "active" : ""}
          handleClick={handleClick}
          >
            <FaCartShopping style={{fontSize: "1.2rem", color:active ? "#8932FFff" : "#C3CAD8" }} />
          </IconBtn>
          <div>-</div>
        </div>
      </div>
  )
}

const ProductCard = ({id, title, category, img, price, cardColor} : CardProps) : JSX.Element => {
  return (
    <div className="card-wrapper">
      <ImgContainer img={img} cardColor={cardColor} title={title} id={id}/>
      <div className="card-body">
        <h3>{title}</h3>
        <div>
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard