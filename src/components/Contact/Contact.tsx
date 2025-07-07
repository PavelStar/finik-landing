import type { FC } from "react";
import { Paragraph, Link } from "../../components/index";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import Phone from "../../assets/contacts/phone.svg?react";
import Mail from "../../assets/contacts/mail.svg?react";

const cx = classNames.bind(styles);

interface IParagraph {
  type?: "phone" | "mail";
  href?: string;
  text: string;
  className?: string;
}

const Contact: FC<IParagraph> = ({ type = "phone", href, text, className }) => {
  const icons = {
    phone: Phone,
    mail: Mail,
  };

  const Icon = icons[`${type}`];
  const linkHref = type == "phone" ? `tel:${text}` : `mailto:${text}`;

  return (
    <Link className={cx(styles.contact, className)} href={href || linkHref}>
      <Icon className={styles.icon} />
      <Paragraph className={styles.text} textDecoration="underline">
        {text}
      </Paragraph>
    </Link>
  );
};

export default Contact;
