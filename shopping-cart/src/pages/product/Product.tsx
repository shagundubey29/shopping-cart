import { useEffect, useState } from "react";
import  {IProducts} from "../../models/IProducts"
import"./Product.scss";

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
    <div>
      {product.loading && <div>Loading...</div>}
      {product.error && <div>{product.error}</div>}
      {product.product && product.product.map((item : IProducts) : JSX.Element=> {
        return(
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Product