import { IProducts } from "../../models/IProducts";
import "./ProductCard.scss";

const ProductCard = ({id, title, category, img, price} : IProducts):JSX.Element => {
  
  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img src={img} alt={title} />
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