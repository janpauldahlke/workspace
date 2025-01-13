import styles from "./Modal.module.css";

// an example for the use of children in react

const Modal = ({ children, isModalOpen, onInteractWithModal }) => {
  return (
    <>
      {isModalOpen ? (
        <div className={styles.backdrop} onClick={onInteractWithModal}></div>
      ) : null}
      <dialog open={isModalOpen} className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
