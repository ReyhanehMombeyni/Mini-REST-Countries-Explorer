import React from "react";

const Filter = () => {
  return (
    <div className="w-full">
      <select defaultValue="Large" className="select select-lg w-full">
        <option disabled={true}>Large</option>
        <option>Large Apple</option>
        <option>Large Orange</option>
        <option>Large Tomato</option>
      </select>
    </div>
  );
};

export default Filter;
