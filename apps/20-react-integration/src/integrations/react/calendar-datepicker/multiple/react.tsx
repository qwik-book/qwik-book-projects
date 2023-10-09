/** @jsxImportSource react */
import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

export const CalendarReactMultiplePicker = () => {
  const preselectedDays = [
    {
      year: 2019,
      month: 10,
      day: 2,
    },
    {
      year: 2019,
      month: 10,
      day: 15,
    },
    {
      year: 2019,
      month: 10,
      day: 30,
    },
  ];

  const [selectedDayRange, setSelectedDayRange] = useState(preselectedDays);
  return (
    <>
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        shouldHighlightWeekends
      />
      <ul>
        {selectedDayRange &&
          selectedDayRange.map((selectedDay, index) => {
            return (
              <li key={index + "_multiple"}>
                {selectedDay.day.toString().padStart(2, "0")}/
                {selectedDay.month.toString().padStart(2, "0")}/
                {selectedDay.year}
              </li>
            );
          })}
      </ul>
    </>
  );
};