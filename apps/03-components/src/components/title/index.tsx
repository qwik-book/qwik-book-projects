interface TitleProps {
  greetingText: string;
  name: string;
}

export const Title = ({ greetingText, name }: TitleProps) => {
  return (
    <div style='border:2px solid red; padding: 5px'>
      <h1 style='color:blue;font-size:46px;'>
        {greetingText} {name}
      </h1>
    </div>
  );
};
