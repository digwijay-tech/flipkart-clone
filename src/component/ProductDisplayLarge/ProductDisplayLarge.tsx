import ProductDisplayNavbar from "./ProductNavbarLarge/ProductDisplayNavbar"
import CategoryDropdowns from "./CategoryDropdownSection/CategoryDropdowns"
import ProductMainSection from "./ProductMainSection/ProductMainSection"

const ProductDisplayLarge = () => {
  
  return (
    <div className="hidden bg-[#f1f3f6] min-[1024px]:block">
      <ProductDisplayNavbar/>
      <CategoryDropdowns/>
      <ProductMainSection/>
    </div>
  ) 
}

export default ProductDisplayLarge