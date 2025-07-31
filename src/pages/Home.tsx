import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import LargeHome from "./LargeHome";
import SmallHome from "./SmallHome";

const Home = () => {
  return (
    <div className="">
      <Navbar /> 
      <SmallHome />
      <LargeHome />
      <Footer />
    </div>
  );
};
export default Home;
