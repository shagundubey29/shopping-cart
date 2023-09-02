import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";
import Size from "./size/Size";

const SideBarFilter = () => {
  return (
    <div>
      <Category />
      <Price />
      <Color />
      <Size />
    </div>
  );
};

export default SideBarFilter;
