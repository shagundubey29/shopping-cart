import "./category.scss"

const Category = () => {
  return <div className="category-wrapper">
    <h2>Category</h2>
    <div>
      <input type="checkbox" name="category" id="category1" />
      <label htmlFor="category1">Casual</label>
    </div>
    <div>
      <input type="checkbox" name="category" id="category2" />
      <label htmlFor="category2">Athletic</label>
    </div>
    <div>
      <input type="checkbox" name="category" id="category3" />
      <label htmlFor="category3">Sneaker</label>
    </div>
  </div>;
};

export default Category;
