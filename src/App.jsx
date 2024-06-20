import { useState } from "react";
import Test from "./components/Test";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import Sorted from "./components/Sorted";
import AddToPost from "./modal/AddToPost";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Текст");
  const [isMain, setMain] = useState(true);
  const [isListPosts, ListPosts] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      title: "Инвестиции - это круто!",
      description: "Описание первого поста",
      author: "Арсений",
    },
    {
      id: uuidv4(),
      title: "a - ужасно!",
      description: "Описание второго поста",
      author: "Иван",
    },
    {
      id: uuidv4(),
      title: "b - ужасно!",
      description: "Описание второго поста",
      author: "Иван",
    },
    {
      id: uuidv4(),
      title: "c - ужасно!",
      description: "Описание второго поста",
      author: "Иван",
    },
    {
      id: uuidv4(),
      title: "d - ужасно!",
      description: "Описание второго поста",
      author: "Иван",
    },
  ]);

  function changeText(event) {
    setText(event.target.value);
  }

  function deletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  function Increment() {
    setCount((count) => count + 1);
  }

  function changeMain() {
    setMain((isMain) => (isMain = !isMain));
  }
  function changePost() {
    ListPosts((isListPosts) => (isListPosts = !isListPosts));
    changeMain();
  }

  return (
    <div className=" relative">
      {isMain && (
        <div className="p-10">
          <Test
            count={count}
            Increment={Increment}
            text={text}
            changeText={changeText}
          ></Test>
          <Sorted></Sorted>
          <List
            deletePost={deletePost}
            posts={posts}
            setPosts={setPosts}
          ></List>
          <div className="flex justify-center">
            <button
              onClick={changePost}
              className="mx-auto bg-indigo-400 text-white p-2 rounded-lg"
            >
              Добавить пост
            </button>
          </div>
        </div>
      )}
      {isListPosts && <AddToPost changePost={changePost}></AddToPost>}
    </div>
  );
}

export default App;
