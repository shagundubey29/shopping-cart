import { IProducts } from "../../models/IProducts";
import IconBtn from "../ui/iconBtn/IconBtn";
import { PiShoppingCartDuotone } from "react-icons/pi";
import "./ProductCard.scss";

const ProductCard = ({id, title, category, img, price} : IProducts):JSX.Element => {
  
  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img src={img} alt={title} />
        <IconBtn>
          <PiShoppingCartDuotone className="cart-icon" />
        </IconBtn>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard