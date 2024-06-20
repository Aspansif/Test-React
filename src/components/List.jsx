import React from "react";
import ListItem from "./ListItem";

function List({ posts, setPosts, deletePost }) {
  return (
    <div className="flex flex-col gap-5 mb-10">
      {posts.map((post) => (
        <ListItem
          post={post}
          setPosts={setPosts}
          deletePost={deletePost}
          key={post.id}
        ></ListItem>
      ))}
    </div>
  );
}

export default List;
