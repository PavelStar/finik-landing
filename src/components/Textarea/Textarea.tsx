import React from "react";
import styles from "./Textarea.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ITextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  className?: string;
}

const Textarea: React.FC<ITextarea> = ({
  error,
  className = "",
  ...textareaProps
}) => {
  return (
    <div className={cx(styles.textarea, className)}>
      <textarea
        rows={1}
        className={cx(
          styles.textareaField,
          error ? styles.textareaFieldError : ""
        )}
        {...textareaProps}
      />
      {error && (
        <span className={cx(styles.textareaErrorMessage)}>{error}</span>
      )}
    </div>
  );
};

export default Textarea;
