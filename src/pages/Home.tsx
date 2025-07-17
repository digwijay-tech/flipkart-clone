import HeroCarousel from '../component/Hero/HeroCarousel'
import ProductCategoryList from '../component/ProductCategoryList/ProductCategoryList'

const Home = () => {
  return (
    <div className='md:px-4 min-h-lvh bg-[#f1f2f4] md:pt-2'>
      <ProductCategoryList/>
        <HeroCarousel/>
    </div>
  )
}

export default Home