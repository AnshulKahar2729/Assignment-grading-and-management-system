import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, eachDayOfInterval, isSameMonth, isToday, startOfWeek } from 'date-fns';


const Day = ({ date, currentMonth, onClick, isAssignmentDay }) => (
  <td
    className={`border px-1 sm:px-4 p-1 text-center sm:py-2 text-sm sm:text-base ${isSameMonth(date, currentMonth) ? '' : 'text-gray-900'} ${
      isToday(date) ? 'bg-[#000000ef]' : ''
    } ${isAssignmentDay ? 'text-yellow-300 cursor-pointer' : 'text-gray-500'}`}
    onClick={() => onClick(date)}
  >
    {format(date, 'd')}
  </td>
);


const Calendar = ({ onSelectDate,Assignments }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDayClick = (date) => {
    onSelectDate(date);
  };

  const firstDayOfWeek = startOfWeek(startOfMonth(currentMonth));

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfWeek,
    end: addMonths(startOfMonth(currentMonth), 1),
  });

  const groupedDays = Array.from(
    { length: daysInMonth.length / 7 },
    (_, index) => daysInMonth.slice(index * 7, (index + 1) * 7)
  );

  return (
    <div className="w-full py-5 flex justify-center overflow-auto  ">
      <div className="container  sm:mx-auto ">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex justify-center gap-10 mb-4 ">
          <button
            style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}
            className=" text-white px-2 py-1 rounded text-sm sm:text-base"
            onClick={prevMonth}
          >
            Previous Month
          </button>
          <button
            style={{background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}}
            className=" text-white px-2 py-1 rounded text-sm sm:text-base"
            onClick={nextMonth}
          >
            Next Month
          </button>
        </div>
        <div className="sm:w-full justify-center flex ">
          <table className="w-full table-auto shadow-xl overflow-x-scroll hideScrollbar">
            <thead>
              <tr>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <th
                      key={day}
                      className="border px-0 py-0 xl:px-4 xl:py-2 text-[10px] sm:text-sm"
                    >
                      {day}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {groupedDays.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day) => {
                    const assignmentForDay = Assignments.find(
                      (item) => format(day, "M/d/yyyy") === item.date
                    );
                    const isAssignmentDay =
                      assignmentForDay &&
                      isSameMonth(day, new Date(assignmentForDay.date));

                    return (
                      <Day
                        key={day}
                        date={day}
                        currentMonth={currentMonth}
                        onClick={handleDayClick}
                        isAssignmentDay={isAssignmentDay}
                      >
                        {assignmentForDay
                          ? assignmentForDay.title
                          : "No Assignment Found"}
                      </Day>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;