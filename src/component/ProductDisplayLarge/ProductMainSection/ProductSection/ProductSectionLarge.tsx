import ProductGridSection from "../ProductGridSection/ProductGridSection"
import TopSection from "./TopSection"

const ProductSectionLarge = () => {
  return (
    <div className="flex-1 ">
        <TopSection/>
        <ProductGridSection/>
    </div>
  )
}

export default ProductSectionLarge