import styles from "./Post.module.css";

const Post = ({ author, content, onDeletePost, onEditPost }) => {
  return (
    <li className={styles.post} onClick={onEditPost}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
      <button
        className="button-contrast"
        onClick={(event) => {
          event.stopPropagation(); // to not bubble up
          onDeletePost();
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Post;
