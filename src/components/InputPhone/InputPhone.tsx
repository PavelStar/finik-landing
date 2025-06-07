import React from "react";
import { IMaskInput } from "react-imask";
import styles from "./InputPhone.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface InputPhoneProps {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  className?: string;
  name?: string;
}

const InputPhone: React.FC<InputPhoneProps> = ({
  value,
  onChange,
  onBlur,
  error,
  className = "",
  name,
}) => {
  return (
    <div className={cx(styles.inputPhone, className)}>
      <IMaskInput
        mask="+7 (000) 000-00-00"
        value={value}
        onAccept={(val: string) => onChange && onChange(val)}
        onBlur={onBlur}
        className={cx(styles.inputField, { [styles.inputFieldError]: error })}
        name={name}
        placeholder="Телефон"
      />
      {error && <span className={cx(styles.inputErrorMessage)}>{error}</span>}
    </div>
  );
};

export default InputPhone;
