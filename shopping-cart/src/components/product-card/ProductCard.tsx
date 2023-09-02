import { IProducts } from "../../models/IProducts";
import IconBtn from "../iconBtn/IconBtn";
import { FaCartShopping } from "react-icons/fa6";
import { HiPlus, HiMinus } from "react-icons/hi";
import "./ProductCard.scss";
import { useState } from "react";

type CardProps = IProducts & {
  cardColor: string;
};

interface ImgContainerProps {
  id: number;
  img: string;
  title: string;
  cardColor: string;
}

const ImgContainer = ({
  img,
  title,
  cardColor,
  id,
}: ImgContainerProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [addToCart, setAddToCart] = useState<number>(0);

  const handleClick = (): void => {
    setActive(true);
    setAddToCart((prevAddToCart) => prevAddToCart + 1);
  };

  const onAdd = (): void => {
    setAddToCart((prevAddToCart) => prevAddToCart + 1);
  };

  const onMinus = (): void => {
    setAddToCart((prevAddToCart) => prevAddToCart - 1);
    if (addToCart === 1) setActive(false);
  };

  return (
    <div className="img-container" style={{ backgroundColor: cardColor }}>
      <img src={img} alt={title} />
      <div
        className="cart"
        style={{ position: "absolute", bottom: "-12%", right: "12%" }}
      >
        {addToCart >= 1 && (
          <button className="button plus" onClick={onAdd}>
            <HiPlus style={{ FontSize: "2rem" }} />
          </button>
        )}
        <IconBtn className={active ? "active" : ""} handleClick={handleClick}>
          {addToCart > 0 ? (
            <span>{addToCart}</span>
          ) : (
            <FaCartShopping className="icon" />
          )}
        </IconBtn>
        {addToCart >= 1 && (
          <button className="button minus" onClick={onMinus}>
            <HiMinus style={{ FontSize: "2rem" }} />
          </button>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({
  id,
  title,
  category,
  img,
  price,
  cardColor,
}: CardProps): JSX.Element => {
  return (
    <div className="card-wrapper">
      <ImgContainer img={img} cardColor={cardColor} title={title} id={id} />
      <div className="card-body">
        <h3>{title}</h3>
        <div>
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
