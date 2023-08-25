import { useEffect, useState } from "react";
import  {IProducts} from "../../models/IProducts"
import"./Product.scss";

interface IState {
  loading: boolean,
  product: IProducts,
  error: string
}

const Product = () => {
  const [product, setProduct] = useState<IState>({
    loading: false,
    product: [] as IProducts[],
    error: ""
  });

  const URL = "../../data/products.json";

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setProduct({
          loading: false,
          product: data,
          error: ""
        });
      }catch(error){
        setProduct({
          loading: false,
          product: [] as IProducts[],
          error: "Error fetching data"
        });
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>

    </div>
  )
}

export default Product