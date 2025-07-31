import { useEffect, useState } from "react";
import OfferCard from "./OfferCard";
import axios from "axios";
type OfferProps = {
  startfrom: number;
};

const NewOffers = ({ startfrom }: OfferProps) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("./carouse.json")
      .then((res) => setProducts(res.data.Smallscreenoffer));
  }, []);
  return (
    <div className="h-full col-[1/13] bg-white">
      <div className="my-3 ms-4 me-1 flex flex-row ">
        {/* NewOfer Card  */}
        {products.slice(startfrom, startfrom + 3).map((item, index) => (
          <OfferCard product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewOffers;
