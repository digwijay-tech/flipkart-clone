import HeroCarousel from '../component/Hero/HeroCarousel'
import ProductCategoryList from '../component/ProductCategoryList/ProductCategoryList'
import ProductsDisplay from '../component/ProductDisplay.tsx/ProductsDisplay'

const Home = () => {
  return (
    <div className='md:px-4 min-h-lvh bg-[#f1f2f4] md:pt-2 md:[scrollbar-width:none]'>
      <ProductCategoryList/>
        <HeroCarousel/>
        <ProductsDisplay/>
    </div>
  )
}

export default Home