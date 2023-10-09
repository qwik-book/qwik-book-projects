/** @jsxImportSource react */
import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

export const CalendarReactPicker = () => {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  };

  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
      <p>
        Día seleccionado: <br/>{selectedDay.day.toString().padStart(2, "0")}/
        {selectedDay.month.toString().padStart(2, "0")}/{selectedDay.year}
      </p>
    </>
  );
};