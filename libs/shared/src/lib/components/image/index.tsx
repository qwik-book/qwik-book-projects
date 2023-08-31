import { component$ } from '@builder.io/qwik';

import { ImageProps } from './../../models';
export const Image = component$<ImageProps>((data: ImageProps) => {
  const {
    src,
    size: { width, height },
    title,
    alt,
  } = data;
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={title || 'Image'}
    />
  );
});
