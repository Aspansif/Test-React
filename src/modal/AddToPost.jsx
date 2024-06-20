import React from "react";

const addToPost = ({ changePost }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className=" text-2xl font-semibold mb-6">Поделитесь своим опытом!</h1>
      <div className="flex flex-col gap-y-5 bg-violet-500 w-96 h-1/2 p-6 rounded-xl">
        <input
          className="p-2 border-2 border-black rounded-lg"
          placeholder="Заголовок"
        />
        <textarea
          rows="3"
          className="p-2 border-2 border-black rounded-lg"
          placeholder="Описание"
        ></textarea>
        <input
          className="p-2 border-2 border-black rounded-lg"
          placeholder="Автор"
        />
        <button
          onClick={changePost}
          className="flex justify-center text-white border-2 hover:bg-green-800 bg-green-500 hover:animate-pulse p-1 rounded-full"
        >
          Создать пост
        </button>
        <button
          onClick={changePost}
          className="flex justify-center text-white border-2 hover:bg-red-800 bg-red-500 hover:animate-pulse p-1 rounded-full"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default addToPost;
