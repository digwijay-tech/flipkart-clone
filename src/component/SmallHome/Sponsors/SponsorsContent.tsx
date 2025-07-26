import { useEffect, useState } from "react";
import SponsorsCard from "./SponsorsCard";
import axios from "axios";

const SponsorsContent = () => {
      const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => setProduct(res.data.SmallTopPick))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col py-3 pe-0.5 ps-4">
      <div className="flex flex-row overflow-x-scroll overflow-y-hidden snap-start snap-mandatory [scrollbar-width:none]">
        {/* card component */}
        {product.map((item, index) => (
          <SponsorsCard sponsors={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default SponsorsContent;
