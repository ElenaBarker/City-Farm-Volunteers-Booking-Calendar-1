import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  return (
    <div className="calendar-container">
        <h2 className="calendar-header">Volunteer sign-up Calendar</h2>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => {
          console.log("Selected Event:", event);
        }}
      />
    </div>
  );
};

export default CalendarComponent;
