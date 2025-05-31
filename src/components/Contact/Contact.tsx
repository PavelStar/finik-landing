import type { FC, ReactNode } from "react";
import { Paragraph } from "../../components/index";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import Phone from "../../assets/contacts/phone.svg?react";
import Mail from "../../assets/contacts/mail.svg?react";

const cx = classNames.bind(styles);

interface IParagraph {
  type?: "phone" | "mail";
  textColor?: "light" | "dark" | "grey";
  children: ReactNode;
  className?: string;
}

const Contact: FC<IParagraph> = ({
  type = "phone",
  textColor = "dark",
  children,
  className,
}) => {
  const icons = {
    phone: Phone,
    mail: Mail,
  };

  const Icon = icons[`${type}`];

  return (
    <div className={cx(styles.contact, className)}>
      <Icon />
      <Paragraph color={textColor}>{children}</Paragraph>
    </div>
  );
};

export default Contact;
