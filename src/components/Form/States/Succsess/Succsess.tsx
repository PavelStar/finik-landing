import React from "react";
import styles from "./Succsess.module.scss";
import classNames from "classnames/bind";
import { Paragraph } from "../../../../components/index";

const cx = classNames.bind(styles);

interface InputPhoneProps {
  className?: string;
}

const Succsess: React.FC<InputPhoneProps> = ({ className = "" }) => {
  return (
    <div className={cx(styles.succsess, className)}>
      <Paragraph>
        Благодарим вас за обращение в FINIK Design Lab. Мы внимательно изучим
        ваши задачи и свяжемся с вами в ближайшее время для уточнения деталей
      </Paragraph>
    </div>
  );
};

export default Succsess;
