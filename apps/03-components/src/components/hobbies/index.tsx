interface HobbiesProps {
  hobbiesList: string[];
}

export const Hobbies = ({ hobbiesList }: HobbiesProps) => {
  return (
    <div style='border:4px solid green; padding: 5px'>
      <ul>
        {hobbiesList.map((value, index) => (
          <li key={index + '_hobby'}>
            {index + 1} - {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
