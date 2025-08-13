import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDIsplaySmall from "./component/SmallHome/ProductDisplayPageSmall/ProductDIsplaySmall";
import FilterSection from "./component/SmallHome/FilterSection/FilterSection";
import FilterContent from "./component/SmallHome/FilterSection/FilterContent";
import ProductDisplayLarge from "./component/ProductDisplayLarge/ProductDisplayLarge";
import Test from "./component/AbTest/Test";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productcategory" element={<ProductCategoryPage />} />
        {/* <Route path="products" element={<ProductsPage />} /> */}
        <Route path="/products/:path" element={<ProductsPage />}>
          <Route path="filter" element={<FilterSection />}>
            <Route index element={<Navigate to={"Price"} replace />} />
            <Route path=":filter" element={<FilterContent />} />
          </Route>
        </Route>
        <Route path="/test" element={<Test/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
