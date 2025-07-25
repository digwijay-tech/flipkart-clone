import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./pages/PageNotFound";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductsPage from "./pages/ProductsPage";
import HeaderSearchArea from "./component/Navbar/HeaderSearchArea";

const App = () => {
  return (
    <>
      <Navbar />
      <HeaderSearchArea />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="productcategory" element={<ProductCategoryPage/>}/>
        <Route path="products" element={<ProductsPage/> }/>
        <Route path="*" element={<PageNotFound/> }/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
