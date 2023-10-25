import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FormDialog from "./FormDialogComponent";
import BookedSessionsComponent from "./BookedSessionsComponent";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [bookedSessions, setBookedSessions] = useState([]);
  const [sessions, setSessions] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchAllSessions();
    fetchAllBookings();
    fetchAllVolunteers();
  }, []);

  const fetchAllSessions = async () => {
    try {
      const response = await fetch(
        "https://pathway-city-farm-project-backend.onrender.com/sessions"
      );
      if (!response.ok) {
        throw Error(`Failed to fetch. Error: ${response.status}`);
      }
      const data = await response.json();
      const eventsForCalendarComponent = data.map((session) => ({
        id: session.id,
        title: session.title,
        start: session.startdate,
        end: session.enddate,
        status: session.status,
      }));
      setSessions(eventsForCalendarComponent);
    } catch (error) {
      console.error("Error fetching slots", error);
    }
  };

  const fetchAllBookings = async () => {
    try {
      const response = await fetch(
        "https://pathway-city-farm-project-backend.onrender.com/bookings"
      );
      if (!response.ok) {
        throw Error(`Failed to fetch. Error: ${response.status}`);
      }
      const data = await response.json();
      setBookedSessions(data);
    } catch (error) {
      console.error("Error fetching booked sessions", error);
    }
  };

  const fetchAllVolunteers = async () => {
    try {
      const response = await fetch(
        "https://pathway-city-farm-project-backend.onrender.com/volunteers"
      );
      if (!response.ok) {
        throw Error(`Failed to fetch volunteers. Error: ${response.status}`);
      }
      const data = await response.json();
      const volunteerOptions = data.map((volunteer) => ({
        name: volunteer.name,
        id: volunteer.id,
      }));
      setVolunteers(volunteerOptions);
    } catch (error) {
      console.error("Error fetching volunteers", error);
    }
  };

  const handleEventSelect = (event) => {
    setSelectedSession(event);
    setDialogOpen(true);
  };

  if (sessions === null) {
    return (
      <p className="loading-page">
        I apologise for any inconvenience caused by the slower server
        performance. I'm currently using a free Render service, which can
        sometimes lead to reduced speed..
      </p>
    );
  }
  function handleSessionBooked() {
    fetchAllSessions();
    fetchAllBookings();
  }

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Volunteer Booking Calendar</h2>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        events={sessions}
        eventPropGetter={(event) => {
          if (event.status === "booked") {
            return {
              style: {
                backgroundColor: "#813126",
                color: "white",
              },
            };
          } else if (event.status === "available") {
            return {
              style: {
                backgroundColor: "#cea86f",
                color: "white",
              },
            };
          }
          return {};
        }}
        onSelectEvent={handleEventSelect}
      />

      {selectedSession && (
        <FormDialog
          session={selectedSession}
          onBook={() => handleSessionBooked()}
          volunteers={volunteers}
        />
      )}

      <div className="booked-sessions">
        <h3>Booked Sessions:</h3>
        <BookedSessionsComponent bookedSessions={bookedSessions} />
      </div>
    </div>
  );
};

export default CalendarComponent;
