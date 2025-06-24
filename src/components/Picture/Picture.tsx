import type { FC } from "react";
import styles from "./Picture.module.scss";
import type { IPicture } from "../../types/types";

const Picture: FC<IPicture> = ({ ...item }) => {
  return (
    <picture className={styles.picture}>
      {item.images.mobile && item.images.mobile2x && (
        <source
          srcSet={`${item.images.mobile} 1x, ${item.images.mobile2x} 2x`}
          media="(max-width: 767px)"
        />
      )}
      {item.images.tablet && item.images.tablet2x && (
        <source
          srcSet={`${item.images.tablet} 1x, ${item.images.tablet2x} 2x`}
          media="(max-width: 1024px)"
        />
      )}
      {item.images.desktop && item.images.desktop2x && (
        <img
          src={item.images.desktop}
          srcSet={`${item.images.desktop2x} 2x`}
          alt={item.alt}
        />
      )}
    </picture>
  );
};

export default Picture;
