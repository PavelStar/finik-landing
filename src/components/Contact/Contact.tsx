import type { FC, ReactNode } from "react";
import { Paragraph, Link } from "../../components/index";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import Phone from "../../assets/contacts/phone.svg?react";
import Mail from "../../assets/contacts/mail.svg?react";

const cx = classNames.bind(styles);

interface IParagraph {
  type?: "phone" | "mail";
  href?: string;
  textColor?: "light" | "dark" | "grey";
  children: ReactNode;
  className?: string;
}

const Contact: FC<IParagraph> = ({
  type = "phone",
  href,
  textColor = "dark",
  children,
  className,
}) => {
  const icons = {
    phone: Phone,
    mail: Mail,
  };

  const Icon = icons[`${type}`];
  const linkHref =
    type == "phone" ? "tel:+74959883738" : "mailto:hello@finik-lab.ru";

  return (
    <Link className={cx(styles.contact, className)} href={href || linkHref}>
      <Icon className={styles.icon} />
      <Paragraph color={textColor} textDecoration="underline">
        {children}
      </Paragraph>
    </Link>
  );
};

export default Contact;
