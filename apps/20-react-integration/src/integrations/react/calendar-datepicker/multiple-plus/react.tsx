
/** @jsxImportSource react */
import { QRL } from '@builder.io/qwik';

import { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';


// 2.- Para especificar la estructura del prop
interface DayItem {
  year: number;
  month: number;
  day: number;
}

interface MultipleSelectionsProps {
  selections: Array<DayItem>;
  setSelectedDayRange: QRL<(daySelections: Array<DayItem>) => void>;
}
// 3.- Adaptamos al prop
export const CalendarReactMultiplePlusPicker = (
  props: MultipleSelectionsProps,
) => {
  // 4.- Asignamos con lo que traemos del prop
  const { selections, setSelectedDayRange: selectMultipleDays } = props;

  // 5.- Aquí asignaremos el nuevo listado de días seleccionados para actualizar
  // mediante "selectMultipleDays" función renomabrada que traemos mediante props
  const changeValue = (value: DayItem[]) => {
    console.log('change', value);
    // Actualiza el valor en el propio componente React que estamos usando en este momento
    setSelectedDayRange(value);
    // Actualizar la información principal del componente de ruta qwik
    selectMultipleDays(value);
  };
  const [selectedDayRange, setSelectedDayRange] = useState(selections);
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={changeValue}
        shouldHighlightWeekends
      />
      <ul>
        {selectedDayRange &&
          selectedDayRange.map((selectedDay, index) => {
            return (
              <li key={index + '_multiple'}>
                {selectedDay.day.toString().padStart(2, '0')}/
                {selectedDay.month.toString().padStart(2, '0')}/
                {selectedDay.year}
              </li>
            );
          })}
      </ul>
    </>
  );
};
