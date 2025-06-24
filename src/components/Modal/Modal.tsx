import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "../../assets/close.svg?react";

const cx = classNames.bind(styles);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleEsc);

      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={cx(styles.overlay)}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div
        className={cx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button
          className={cx(styles.closeBtn)}
          aria-label="Закрыть модальное окно"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

        <div className={cx(styles.content)}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
