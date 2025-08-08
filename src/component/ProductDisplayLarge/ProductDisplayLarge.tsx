import ProductDisplayNavbar from "./ProductNavbarLarge/ProductDisplayNavbar"
import CategoryDropdowns from "./CategoryDropdownSection/CategoryDropdowns"
import ProductMainSection from "./ProductMainSection/ProductMainSection"

const ProductDisplayLarge = () => {
  return (
    <div className="bg-[#f1f3f6]">
      <ProductDisplayNavbar/>
      <CategoryDropdowns/>
      <ProductMainSection/>
    </div>
  )
}

export default ProductDisplayLarge