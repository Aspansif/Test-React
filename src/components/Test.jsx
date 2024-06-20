import React from "react";

function Test({ count, Increment, text, changeText }) {
  return (
    <div className="flex justify-center gap-x-10 mb-10">
      <div>
        <p className=" text-red-500">{count}</p>
        <button onClick={Increment}>Click for me</button>
      </div>
      <div>
        <h1 className=" text-2xl font-bold mb-3">{text}</h1>
        <input
          value={text}
          onChange={changeText}
          placeholder="Напиши на мне!"
          className="border-2  hover:border-teal-500"
          type="text"
        />
      </div>
    </div>
  );
}

export default Test;
