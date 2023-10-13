import React from "react";

const BookedSessionsComponent = ({ bookedSessions }) => {
  return (
    <div className="booked-sessions">
      <ul>
        {bookedSessions.map((session, index) => (
          <li key={index} className="booked-sessions-item">
            <strong>{session.title}</strong> - {session.date} - {session.name}{" "}
            <button className="cancel-booking-button">Cancel booking</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedSessionsComponent;
