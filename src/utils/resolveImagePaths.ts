import type { IPicture } from "../types/types";

export const imagesMap = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

export const resolveImagePaths = (picture: IPicture): IPicture => {
  const resolve = (filename?: string): string => {
    if (!filename) return "";
    const match = Object.entries(imagesMap).find(([key]) =>
      key.endsWith("/" + filename)
    );
    return match?.[1] ?? "";
  };

  return {
    alt: picture.alt,
    images: {
      desktop: resolve(picture.images.desktop),
      desktop2x: resolve(picture.images.desktop2x),
      tablet: resolve(picture.images.tablet),
      tablet2x: resolve(picture.images.tablet2x),
      mobile: resolve(picture.images.mobile),
      mobile2x: resolve(picture.images.mobile2x),
    },
  };
};
