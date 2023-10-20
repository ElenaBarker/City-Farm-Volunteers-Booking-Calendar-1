const VolunteerInstructionsComponent = ({ pageToShow }) => {
  return (
    <div className="volunteer-instructions">
      {pageToShow === "manager" && <h1>You are the manager</h1>}
      <h3 className="instructions-header">How to Book a Volunteer Session</h3>
      <p className="instructions-text">
        Welcome to our city farm! We have both morning and evening sessions
        available for volunteers to help us with feeding our farm animals.
      </p>

      <h4 className="sessions-header">Morning Sessions</h4>
      <p className="sessions-description">
        Our morning sessions start at 09:00 and end at 11:00. These sessions are
        perfect for early birds looking to assist with feeding our animals.
      </p>
      <p className="sessions-steps">
        To book a <span className="available-session">morning</span> session,
        follow these steps:
        <ol>
          <li>
            Click on an available{" "}
            <span className="available-session">morning</span> session on the
            calendar.
          </li>
          <li>Enter your name and click the "Book this session" button.</li>
          <li>
            You'll receive a confirmation, and the session will be marked as
            booked by changing color to{" "}
            <span className="booked-session">morning</span>.
          </li>
        </ol>
      </p>

      <h4 className="sessions-header">Evening Sessions</h4>
      <p className="sessions-description">
        Our evening sessions start at 17:00 and end at 19:00. These sessions are
        ideal for those who prefer assisting with feeding our farm animals in
        the late afternoon or evening.
      </p>
      <p className="sessions-steps">
        To book an <span className="available-session">evening</span> session,
        follow the same steps as for morning sessions.
      </p>

      <p className="notes">
        Please note that to ensure fairness and availability for everyone, we
        only allow one volunteer per session (either morning or evening).
      </p>
    </div>
  );
};

export default VolunteerInstructionsComponent;
