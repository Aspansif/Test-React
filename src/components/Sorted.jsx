import React from "react";

const Sorted = () => {
  return (
    <div className="flex justify-end gap-x-2 mb-10">
      <input
        className=" border-2 border-teal-700"
        placeholder="сортировка"
        type="text"
      />
      <select>
        <option>Дефолт</option>
        <option>Популярность +</option>
        <option>Популярность -</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
    </div>
  );
};

export default Sorted;
