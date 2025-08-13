import { useState } from "react";

export default function Test() {
  const minPrice = 0;
  const maxPrice = 5000;
  const step = 100;

  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(4000);

  const getPercentage = (value) => ((value - minPrice) / (maxPrice - minPrice)) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="w-80 p-4">
      {/* Track */}
      <div className="relative h-2">
        {/* Background */}
        <div className="absolute w-full h-2 bg-gray-300 rounded"></div>

        {/* Selected range */}
        <div
          className="absolute h-2 bg-blue-500 rounded"
          style={{
            left: `${getPercentage(minValue)}%`,
            right: `${100 - getPercentage(maxValue)}%`,
          }}
        ></div>

        {/* Min range input */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-blue-500
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:bg-blue-500
            [&::-moz-range-thumb]:rounded-full"
        />

        {/* Max range input */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-blue-500
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:bg-blue-500
            [&::-moz-range-thumb]:rounded-full"
        />
      </div>

      {/* Price labels */}
      <div className="flex justify-between mt-3">
        <div className="border px-2 py-1 text-sm rounded">
          ₹{minValue}
        </div>
        <div className="border px-2 py-1 text-sm rounded">
          ₹{maxValue}
        </div>
      </div>
    </div>
  );
}
