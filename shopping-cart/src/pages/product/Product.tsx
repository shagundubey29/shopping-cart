import { useEffect, useState } from "react";
import  {IProducts} from "../../models/IProducts"
import"./Product.scss";
import ProductCard from "../../components/product-card/ProductCard";

interface IState {
  loading: boolean,
  product: IProducts[],
  error: string
}

const bgColor : string[] = ["#CDDABB", "#98C8D5", "#9897B9", "#B4BED0", "#DBD7DA", "#BECBC3", "#DBE0BD", "#D5C8B3", "#E3B4BA"];

const Product = (): JSX.Element => {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [product, setProduct] = useState<IState>({
    loading: true,
    product: [] as IProducts[],
    error: ""
  });

  const URL = "../src/data/item.json";
  useEffect(() => {
    let subscribe = true;
    fetch(URL)
      .then((response) => response.json())
      .then((data : IProducts[]) => {
        setProduct({
          ...product,
          loading: false,
          product: data,
        });
      })
      .catch(() => {
        setProduct({
          ...product,
          loading: false,
          error: "Something went wrong!"
        });
      });
    return () => {
      subscribe = false;
    };
  }, []);

  const getNextColor = () : string => {
    const cardColor: string = bgColor[colorIndex % bgColor.length];
    setColorIndex((prevIndex) => (prevIndex + 1) % bgColor.length);
    return cardColor;
  };
  // console.log(getNextColor())
  return (
    <div className="card-container">
      {product.loading && <div>Loading...</div>}
      {product.error && <div>{product.error}</div>}
      {product.product && product.product.map((item : IProducts, index:number) : JSX.Element=> {
        const cardColor: string = bgColor[index % bgColor.length];
        return(
          <ProductCard key={item.id} {...item} cardColor={cardColor}/>
        )
      })}
    </div>
  )
}

export default Product