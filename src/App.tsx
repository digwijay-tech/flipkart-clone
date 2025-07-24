import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="*" element={<PageNotFound/> }/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
