import React from "react";
import styles from "./inputText.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IinputText extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

const inputText: React.FC<IinputText> = ({
  error,
  className = "",
  ...inputProps
}) => {
  return (
    <div className={cx(styles.inputText, className)}>
      <input
        className={cx(
          styles.inputTextField,
          error ? styles.inputTextFieldError : ""
        )}
        {...inputProps}
      />
      {error && (
        <span className={cx(styles.inputTextErrorMessage)}>{error}</span>
      )}
    </div>
  );
};

export default inputText;
