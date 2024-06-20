import React from "react";

const ListItem = ({ post, setPosts, deletePost }) => {
  return (
    <div className="flex flex-col border-2 border-cyan-500">
      <h1 className="text-2xl font-bold text-center">{post.title}</h1>
      <div className="mb-2">
        <p>{post.description}</p>
        <p>Автор: {post.author}</p>
      </div>
      <button
        onClick={() => deletePost(post.id)}
        className="w-1/4 mx-auto text-white bg-red-500 hover:bg-red-400"
      >
        Удалить
      </button>
    </div>
  );
};

export default ListItem;
