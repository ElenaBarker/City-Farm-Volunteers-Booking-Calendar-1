import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FormDialog from "./FormDialogComponent";
import slotsData from "./OpenSlots.json";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [bookedSessions, setBookedSessions] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(slotsData);
  }, []);

  const events = slots.map((slot) => ({
    title: slot.title,
    start: new Date(slot.start),
    end: new Date(slot.end),
  }));

  const handleEventSelect = (event) => {
    setSelectedSession(event);
  };

  const handleBooking = (name) => {
    if (!selectedSession) {
      return;
    }

    const isAlreadyBooked = bookedSessions.some(
      (session) => session.title === selectedSession.title
    );

    if (isAlreadyBooked) {
      alert("This session is already booked.");
      return;
    }

    const bookedSession = {
      title: selectedSession.title,
      start: selectedSession.start,
      end: selectedSession.end,
      name: name,
    };

    setBookedSessions([...bookedSessions, bookedSession]);

    setSlots((prevSlots) =>
      prevSlots.filter(
        (slot) =>
          slot.title !== selectedSession.title ||
          slot.start !== selectedSession.start
      )
    );

    setSelectedSession(null);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Volunteer sign-up Calendar</h2>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        events={events}
        onSelectEvent={handleEventSelect}
      />

      {selectedSession && (
        <FormDialog
          session={selectedSession}
          onBook={(name) => handleBooking(name)}
        />
      )}

      <div className="booked-sessions">
        <h3>Booked Sessions:</h3>
        <ul>
          {bookedSessions.map((session, index) => (
            <li key={index}>
              <strong>{session.title}</strong> - {session.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
