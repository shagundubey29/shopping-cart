import { useEffect, useState } from "react";
import  {IProducts} from "../../models/IProducts"
import"./Product.scss";
import ProductCard from "../../components/product-card/ProductCard";

interface IState {
  loading: boolean,
  product: IProducts[],
  error: string
}

const Product = (): JSX.Element => {
  const [product, setProduct] = useState<IState>({
    loading: true,
    product: [] as IProducts[],
    error: ""
  });

  console.log(product.product);
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

  return (
    <div className="card-container">
      {product.loading && <div>Loading...</div>}
      {product.error && <div>{product.error}</div>}
      {product.product && product.product.map((item : IProducts) : JSX.Element=> {
        return(
          <ProductCard key={item.id} {...item}/>
        )
      })}
    </div>
  )
}

export default Product