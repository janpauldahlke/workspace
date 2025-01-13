import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [newPostText, setNewPostText] = useState("");
  const [newName, setNewName] = useState("");

  const changeTextBoxHandler = (event) => {
    const newPostText = event.target.value;
    setNewPostText(newPostText);
  };

  const changeNameHandler = (event) => {
    const newName = event.target.value;
    setNewName(newName);
  };

  const exampleData = [
    { author: "Hgard", content: " Hail discordia" },
    { author: "Shea", content: " Playboy is fun" },
    { author: "Wilson", content: " dont judge me" },
  ];

  return (
    <>
      <NewPost
        onChangeTextBox={changeTextBoxHandler}
        onChangeName={changeNameHandler}
      />
      <ul className={styles.posts}>
        {exampleData.map(({ author, content }, index) => {
          return <Post key={index} author={author} content={content}></Post>;
        })}
      </ul>
    </>
  );
};

export default PostsList;
