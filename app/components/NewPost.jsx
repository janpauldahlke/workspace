import styles from "./NewPost.module.css";

const NewPost = ({
  onChangeTextBox,
  onChangeName,
  onAddPost,
  newPostText,
  newName,
}) => {
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
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name: </label>
        <input
          type="text"
          id="name"
          required
          rows={3}
          onChange={onChangeName}
          value={newName}
        />
      </p>

      <button className="button-contrast" onClick={onAddPost}>
        Publish
      </button>

      {/*<div>
        <label htmlFor="prove">Verify State </label>
        <div id="prove" className={styles.state}>
          <p>from: {newName}</p>
          <p>content: {newPostText}</p>
        </div>
        </div>*/}
    </form>
  );
};

export default NewPost;
