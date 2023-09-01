interface AgeProps {
  age: number;
}

export const Age = ({ age }: AgeProps) => {
  return (
    <div style='border:2.5px solid yellow; padding: 5px'>
      <p>
        {age > 40
          ? 'Como "tienes más de 40 años", tienes 18 años y más de 22 años de experiencia ;)'
          : `Eres joven, todavía tienes ${age} años y te faltan ${
              40 - age
            } para volver a cumplir 18 años ;)`}
      </p>
    </div>
  );
};
