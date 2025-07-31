import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./pages/PageNotFound";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDIsplaySmall from "./component/SmallHome/ProductDisplayPageSmall/ProductDIsplaySmall";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productcategory" element={<ProductCategoryPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/smallproductpage" element={<ProductDIsplaySmall/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
