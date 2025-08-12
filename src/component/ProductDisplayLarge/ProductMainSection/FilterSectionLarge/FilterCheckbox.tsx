const FilterCheckbox = () => {
  return (
    <div className="py-[3px] cursor-pointer">
      <label
        htmlFor=""
        className="py-[6px] w-full flex relative !leading-[1.4] "
      >
        <input type="checkbox" className="w-3.5 h-3.5" />
        <span className="font-[inter] text-[#212121] truncate text-[14px] ps-[11px] inline-block flex-1 !leading-[1]">
          Samsung
        </span>
      </label>
    </div>
  );
};

export default FilterCheckbox;
