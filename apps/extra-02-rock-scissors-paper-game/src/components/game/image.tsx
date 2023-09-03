import { ImageProps } from '~/models/image';

export const Image = (data: ImageProps) => {
  return (
    <img
      width={data.width || 100}
      height={data.height || 100}
      src={data.src}
      alt={data.alt}
    />
  );
};
