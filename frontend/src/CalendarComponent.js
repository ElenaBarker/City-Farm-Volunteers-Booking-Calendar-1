import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FormDialog from "./FormDialogComponent";
import BookedSessionsComponent from "./BookedSessionsComponent";
import AvailableSessionsComponent from "./AvailableSessionsComponent";

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ pageToShow }) => {
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
        "https://elena-farm.raccoon.space/sessions"
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
      console.error("Error fetching sessions", error);
    }
  };

  const fetchAllBookings = async () => {
    try {
      const response = await fetch(
        "https://elena-farm.raccoon.space/bookings"
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
        "https://elena-farm.raccoon.space/volunteers"
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
        Loading data... My backend is currently hosted on the free tier of
        Render, which may cause the first load of data to be slow. In
        production, this would not be an issue.
      </p>
    );
  }
  function handleSessionBooked() {
    fetchAllSessions();
    fetchAllBookings();
  }

  const onCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(
        `https://elena-farm.raccoon.space/${bookingId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw Error(`Failed to cancel booking. Error: ${response.status}`);
      }
      fetchAllBookings();
      fetchAllSessions();
    } catch (error) {
      console.error("Error canceling booking", error);
    }
  };

  return (
    <div className="calendar-container">
      {pageToShow === "volunteer" && (
        <h3 className="calendar-header">Volunteer Booking Calendar</h3>
      )}
      {pageToShow === "volunteer" && (
        <BigCalendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 450 }}
          events={sessions}
          eventPropGetter={(event) => {
            if (event.status === "booked") {
              return {
                style: {
                  backgroundColor: "#2a1621",
                  color: "white",
                },
              };
            } else if (event.status === "available") {
              return {
                style: {
                  backgroundColor: "#79AC78",
                  color: "white",
                },
              };
            }
            return {};
          }}
          onSelectEvent={handleEventSelect}
        />
      )}

      {pageToShow === "volunteer" && selectedSession && (
        <FormDialog
          session={selectedSession}
          onBook={() => handleSessionBooked()}
          volunteers={volunteers}
          setDialogOpen={setDialogOpen}
          dialogOpen={dialogOpen}
        />
      )}
      {pageToShow === "volunteer" && (
        <div className="booked-sessions">
          <h3>Booked Sessions:</h3>
          <BookedSessionsComponent
            bookedSessions={bookedSessions}
            onCancelBooking={onCancelBooking}
          />
        </div>
      )}
      {pageToShow === "manager" && (
        <div className="available-sessions">
          <AvailableSessionsComponent availableSessions={sessions} />
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
