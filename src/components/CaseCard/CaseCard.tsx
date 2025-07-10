import type { FC } from "react";
import styles from "./CaseCard .module.scss";
import classNames from "classnames/bind";
import { Paragraph, Picture } from "../index";
import type { ICasesPageItem } from "../../types/types";

const cx = classNames.bind(styles);

export interface ICaseCardProps {
  className?: string;
}

const CaseCard: FC<ICaseCardProps & ICasesPageItem> = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <div className={cx(styles.caseCard, className)}>
      <Picture {...image} />
      <div className={styles.textWrap}>
        <Paragraph
          className={styles.title}
          size="L"
          weight="medium"
          text={title}
        />
        <Paragraph className={styles.description} color="light">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default CaseCard;
