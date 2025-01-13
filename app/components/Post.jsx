import { useState } from "react";
import styles from "./Post.module.css";

const Post = ({ author, content, onDeletePost }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
      <button className="button-contrast" onClick={onDeletePost}>
        delete
      </button>
    </li>
  );
};

export default Post;
