export interface IPicture {
  alt?: string;
  images: {
    desktop: string;
    desktop2x?: string;
    tablet?: string;
    tablet2x?: string;
    mobile?: string;
    mobile2x?: string;
  };
}
