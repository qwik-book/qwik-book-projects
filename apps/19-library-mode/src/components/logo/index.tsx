import { component$ } from '@builder.io/qwik';

export interface LogoProps {
  url: string;
  alt: string;
  width: number;
  height: number;
  image: string;
}
export const Logo = component$((props: LogoProps) => {
  const { url, alt, width, height, image } = props;
  return (
    <div>
      <a href={url}>
        <img alt={alt} width={width} height={height} src={image} />
      </a>
    </div>
  );
});
