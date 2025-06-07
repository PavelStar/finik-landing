import type { FC } from "react";
import type { IPictureItem } from "../../constants/cases";

const Picture: FC<IPictureItem> = ({ ...item }) => {
  console.log(item);

  return (
    <picture>
      <source
        srcSet={`${item.images.mobile} 1x, ${item.images.mobile2x} 2x`}
        media="(max-width: 768px)"
      />
      <source
        srcSet={`${item.images.tablet} 1x, ${item.images.tablet2x} 2x`}
        media="(max-width: 1023px)"
      />
      <img
        src={item.images.desktop}
        srcSet={`${item.images.desktop2x} 2x`}
        alt={item.alt}
      />
    </picture>
  );
};

export default Picture;
