import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const [newPostText, setNewPostText] = useState("");
  const [newName, setNewName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { author: "Hgard", content: " Hail discordia" },
    { author: "Shea", content: " Playboy is fun" },
    { author: "Wilson", content: " dont judge me" },
  ]);

  const changeTextBoxHandler = (event) => {
    const newPostText = event.target.value;
    setNewPostText(newPostText);
  };

  const changeNameHandler = (event) => {
    const newName = event.target.value;
    setNewName(newName);
  };

  const addPostHandler = (event) => {
    event.preventDefault();

    setPosts((prevPosts) => [
      ...prevPosts,
      { author: newName, content: newPostText },
    ]);

    setNewPostText("");
    setNewName("");
    setModalOpen(false);
  };

  const deletePostHandler = (index) => {
    setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
  };

  const hideModal = () => {
    setModalOpen(!false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button className="myButton" onClick={openModal}>
        create new Post
      </button>
      <Modal onInteractWithModal={hideModal} {...{ isModalOpen }}>
        <NewPost
          onChangeTextBox={changeTextBoxHandler}
          onChangeName={changeNameHandler}
          onAddPost={addPostHandler}
          {...{ newPostText, newName }} // spread like so better then newPostText={newPostText}
        />
      </Modal>
      <ul className={styles.posts}>
        {posts.map(({ author, content }, index) => {
          return (
            <Post
              onDeletePost={() => deletePostHandler(index)}
              key={index}
              author={author}
              content={content}
            ></Post>
          );
        })}
      </ul>
    </>
  );
};

export default PostsList;
