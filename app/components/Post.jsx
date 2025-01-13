import styles from "./Post.module.css";

const Post = ({ author, content, ..._rest }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
    </li>
  );
};

export default Post;
