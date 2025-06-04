/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { IMaskInput } from "react-imask";
import styles from "./InputPhone.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IInputPhoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

const InputPhone: React.FC<IInputPhoneProps> = ({
  error,
  className = "",
  ...inputProps
}) => {
  return (
    <div className={cx(styles.inputPhone, className)}>
      <IMaskInput
        {...(inputProps as any)}
        mask="+7 (000) 000-00-00"
        className={cx(styles.inputField, {
          [styles.inputFieldError]: error,
        })}
      />
      {error && <span className={cx(styles.inputErrorMessage)}>{error}</span>}
    </div>
  );
};

export default InputPhone;
