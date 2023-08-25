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
  console.log(product);
  const URL = "../src/data/item.json";
  useEffect(() => {
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
      

  }, []);

  return (
    <div>

    </div>
  )
}

export default Product