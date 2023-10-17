import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FormDialog from "./FormDialogComponent";
import BookedSessionsComponent from "./BookedSessionsComponent";
moment.tz.setDefault("Europe/London");

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [selectedSession, setSelectedSession] = useState(null);
  const [bookedSessions, setBookedSessions] = useState([]);
  const [slots, setSlots] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchAllSlots();
    fetchAllBookings();
    fetchAllVolunteers();
  }, []);

  const fetchAllSlots = async () => {
    try {
      const response = await fetch(
        "https://pathway-city-farm-project-backend.onrender.com/slots"
      );
      if (!response.ok) {
        throw Error(`Failed to fetch. Error: ${response.status}`);
      }
      const data = await response.json();

      const dataWithTimeZone = data.map((slot) => ({
        ...slot,
        startdate: moment(slot.startdate).tz("Europe/London").toDate(),
        enddate: moment(slot.enddate).tz("Europe/London").toDate(),
      }));
      setSlots(dataWithTimeZone);
    } catch (error) {}
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
    } catch (error) {}
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

  const statusForSession = (title, startdate) => {
    const isBooked = bookedSessions.some((session) => {
      return (
        session.title === title &&
        new Date(session.startdate) === new Date(startdate)
      );
    });
    return isBooked ? "booked" : "available";
  };
  const events = slots.map((slot) => ({
    id: slot.id,
    title: slot.title,
    start: new Date(slot.startdate),
    end: new Date(slot.enddate),
    status: statusForSession(slot.title, slot.startdate),
  }));
  const handleEventSelect = (event) => {
    setSelectedSession(event);
    setDialogOpen(true);
  };

  const handleSessionBooking = (name, selectedVolunteer) => {
    if (!selectedSession || !selectedSession.start) {
      return;
    }
    setDialogOpen(false);

    const selectedSessionID = `${
      selectedSession.title
    }-${selectedSession.start.toDateString()}`;

    const isAlreadyBooked = bookedSessions.some((session) => {
      const uniqueSessionKey = `${session.title}-${session.startdate}`;
      return uniqueSessionKey === selectedSessionID;
    });

    if (isAlreadyBooked) {
      alert("This session is already booked.");
      return;
    }

    const updatedSlots = slots.filter(
      (slot) =>
        slot.title !== selectedSession.title ||
        slot.startdate !== selectedSession.start.toDateString()
    );
    const bookedSession = {
      title: selectedSession.title,
      start: selectedSession.start,
      end: selectedSession.end,
      name: name,
      status: "booked",
      date: selectedSession.start.toDateString(),
      volunteer: selectedVolunteer,
    };

    setBookedSessions([...bookedSessions, bookedSession]);
    setSlots(updatedSlots);

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
      <h2 className="calendar-header">Volunteer Booking Calendar</h2>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
        events={events}
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
          onBook={(name, volunteer) => handleSessionBooking(name, volunteer)}
          open={dialogOpen}
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
