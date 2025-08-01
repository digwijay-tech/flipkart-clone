import { useFetch } from "../../../../Hooks/useFetch";
import SmallProductCard from "../SmallProductCard";
type GridPath = {
  path: string;
};
const SmallProductGrid = ({ path }: GridPath) => {
  const { result } = useFetch("products");
  if (!result) return null;
  const products = Array.isArray(result[path]) ? result[path] : [];
  return (
    <div className="grid grid-cols-2">
      {products.map((item) => (
        <SmallProductCard key={item.prod_id} product={item} />
      ))}
    </div>
  );
};

export default SmallProductGrid;
