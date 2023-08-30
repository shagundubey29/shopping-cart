import { IProducts } from "../../models/IProducts";
import IconBtn from "../ui/iconBtn/IconBtn";
import { FaCartShopping } from "react-icons/fa6";
import "./ProductCard.scss";


const ProductCard = ({title, category, img, price} : IProducts & string):JSX.Element => {

  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img src={img} alt={title} />
        <IconBtn style={{ position:"absolute", bottom:"-12%", right:"12%"}}>
          <FaCartShopping style={{fontSize: "1.2rem",color: "#C3CAD8"}} />
        </IconBtn>
      </div>
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