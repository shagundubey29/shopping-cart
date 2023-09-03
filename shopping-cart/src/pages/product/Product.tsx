import { useEffect, useState } from "react";
import { IProducts } from "../../models/IProducts";
import "./Product.scss";
import ProductCard from "../../components/product-card/ProductCard";
import FilterTopBar from "../../components/filterTopbar/FilterTopBar";
import SideBarFilter from "../../components/sideBarFilter/SideBarFilter";
interface IState {
  loading: boolean;
  product: IProducts[];
  error: string;
}

const bgColor: string[] = [
  "#CDDABB",
  "#98C8D5",
  "#9897B9",
  "#B4BED0",
  "#DBD7DA",
  "#BECBC3",
  "#DBE0BD",
  "#D5C8B3",
  "#E3B4BA",
];

const CardContainer = ({ loading, error, product }: IState): JSX.Element => {
  return (
    <div className="card-container">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {product &&
        product.map((item: IProducts, index: number): JSX.Element => {
          const cardColor: string = bgColor[index % bgColor.length];
          return <ProductCard key={item.id} {...item} cardColor={cardColor} />;
        })}
    </div>
  );
};

const Product = (): JSX.Element => {
  const [data, setData] = useState<IState>({
    loading: true,
    product: [] as IProducts[],
    error: "",
  });

  const URL = "../src/data/item.json";
  useEffect(() => {
    let subscribe = true;
    fetch(URL)
      .then((response) => response.json())
      .then((item: IProducts[]) => {
        setData({
          ...data,
          loading: false,
          product: item,
        });
      })
      .catch(() => {
        setData({
          ...data,
          loading: false,
          error: "Something went wrong!",
        });
      });
    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <main>
      <FilterTopBar />
      <div>
        <SideBarFilter />
        <CardContainer {...data} />
      </div>
    </main>
  );
};

export default Product;
