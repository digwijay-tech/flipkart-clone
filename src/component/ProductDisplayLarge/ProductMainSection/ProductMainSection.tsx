import FilterLarge from "./FilterSectionLarge/FilterLarge";
import ProductSectionLarge from "./ProductSection/ProductSectionLarge";

const ProductMainSection = () => {
  return (
    <div className=" flex flex-row p-2">
      <FilterLarge />
      <ProductSectionLarge />
    </div>
  );
};

export default ProductMainSection;
