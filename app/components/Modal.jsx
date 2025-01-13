import styles from "./Modal.module.css";

// an example for the use of children in react

const Modal = ({ children, isModalOpen, onInteractWithModal }) => {
  return (
    <>
      <div
        className={isModalOpen ? styles.backdrop : ""}
        onClick={onInteractWithModal}
      ></div>
      <dialog open={isModalOpen} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
