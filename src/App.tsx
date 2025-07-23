import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> }/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
