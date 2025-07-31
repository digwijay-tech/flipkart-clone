import { Link } from "react-router-dom";
type BtnProps = {
  property?: string | null;
};
const ColoredSectionBtn = ({ property }: BtnProps) => {
  return (
    <Link to="/" className={`flex flex-col items-start ${property}`}>
      <div className="bg-black rounded-[30px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="mx-3 my-1"
        >
          <path
            d="M1 8H14"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 3.5L14.5 8L10 12.5"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default ColoredSectionBtn;
