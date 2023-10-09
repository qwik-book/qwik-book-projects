/** @jsxImportSource react */
import { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';

export const CalendarReactRangePicker = () => {
  const defaultFrom = {
    year: 2019,
    month: 3,
    day: 4,
  };

  const defaultTo = {
    year: 2019,
    month: 3,
    day: 7,
  };

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        shouldHighlightWeekends
      />
      {selectedDayRange && selectedDayRange.from ? (
        <p>
          Desde: <br />
          {selectedDayRange.from.day.toString().padStart(2, '0')}/
          {selectedDayRange.from.month.toString().padStart(2, '0')}/
          {selectedDayRange.from.year}
        </p>
      ) : (
        <span>Cargando...</span>
      )}
      {selectedDayRange && selectedDayRange.to ? (
        <p>
          Hasta: <br />
          {selectedDayRange.to.day.toString().padStart(2, '0')}/
          {selectedDayRange.to.month.toString().padStart(2, '0')}/
          {selectedDayRange.to.year}
        </p>
      ) : (
        <span>Cargando...</span>
      )}
    </>
  );
};
