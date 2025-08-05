import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDIsplaySmall from "./component/SmallHome/ProductDisplayPageSmall/ProductDIsplaySmall";
import FilterSection from "./component/SmallHome/FilterSection/FilterSection";
import FilterContent from "./component/SmallHome/FilterSection/FilterContent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productcategory" element={<ProductCategoryPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/smallproductpage/:path" element={<ProductDIsplaySmall />}/>
        <Route path="smallproductpage/:id/filter" element={<FilterSection />} >
        <Route index element={<Navigate to={"Price"} replace/> }/>
        <Route path=":filter" element={<FilterContent/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
