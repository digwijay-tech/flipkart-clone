import SmallProductCard from "../SmallProductCard"

type Product = {
  prod_id: string;
  brand: string;
  title: string;
  prod_image: {
    src: string;
    srcset1: string;
  };
  discount_percentage: string;
  previous_price: string;
  current_price: string;
  emi_price: string;
  offered_banks: string;
  assuredby: string;
  tag: string;
  isSponsored: boolean;
};
type GridProps = {
  products: Product[];
};
const SmallProductGrid = ({ products }: GridProps) => {
  return (
    <div className="grid grid-cols-2">
      {Array.isArray(products) &&
        products.map((item) => (
          <SmallProductCard key={item.prod_id} product={item} />
        ))}
    </div>
  );
};

export default SmallProductGrid;
