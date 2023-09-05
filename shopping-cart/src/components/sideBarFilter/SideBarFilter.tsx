import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";
import Size from "./size/Size";
import "./sideBarFilter.scss"

const SideBarFilter = () => {
  return (
    <div className="sideFilter-wrapper">
      <Category />
      <Price />
      <Color />
      <Size />
    </div>
  );
};

export default SideBarFilter;
