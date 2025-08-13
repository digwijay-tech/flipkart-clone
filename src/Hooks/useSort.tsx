
type Product = {
  prod_id: string;
  brand: string;
  title: string;
  prod_image: {
    src: string;
    srcset1: string;
  };
  discount_percentage: number;
  previous_price: number;
  current_price: number;
  emi_price: string;
  offered_banks: string;
  assuredby: string;
  tag: string;
  isSponsored: boolean;
  rating: number;
};

export const useSort = (products :Product[],sort:string) => {
    let sortedArray: Product[] = [];
      switch (sort) {
    case "popularity":
      sortedArray = [...products].sort((a, b) => a.rating - b.rating);
      break;
    case "price-low_to_high":
      sortedArray = [...products].sort(
        (a, b) => a.current_price - b.current_price
      );
      break;
    case "price-high_to_low":
      sortedArray = [...products].sort(
        (a, b) => b.current_price - a.current_price
      );
      break;
    case "newsest_first":
      sortedArray = products.reverse();
      break;
    case "discount":
      sortedArray = [...products].sort(
        (a, b) => b.discount_percentage - a.discount_percentage
      );
      break;
  }
  return sortedArray
  
}
