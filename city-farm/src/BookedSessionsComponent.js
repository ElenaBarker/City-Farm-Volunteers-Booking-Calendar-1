import React from "react";

const BookedSessionsComponent = ({ bookedSessions }) => {
  console.log(bookedSessions);
  return (
    <div className="booked-sessions">
      <ul>
        {bookedSessions.map((session, index) => (
          <li key={index} className="booked-sessions-item">
            <strong>{session.title}</strong> -{" "}
            {new Date(session.startdate).toDateString()} - {session.name}{" "}
            <button className="cancel-booking-button">Cancel booking</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedSessionsComponent;
