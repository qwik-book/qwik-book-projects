export interface ImageProps {
  src: string;
  size: {
    width: number;
    height: number;
  };
  alt: string;
  title?: string;
}
