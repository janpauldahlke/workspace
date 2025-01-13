import { forwardRef } from "react";
import styles from "./NewPost.module.css";

const NewPost = forwardRef(
  ({ onChangeTextBox, onChangeName, onAddPost, newPostText, newName }, ref) => {
    return (
      <form className={styles.form} onSubmit={onAddPost}>
        <p>
          <label htmlFor="body">Enter Text:</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={onChangeTextBox}
            value={newPostText}
            ref={ref}
          ></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            required
            onChange={onChangeName}
            value={newName}
          />
        </p>
        <button className="button-contrast" type="submit">
          Publish
        </button>
      </form>
    );
  }
);

export default NewPost;
