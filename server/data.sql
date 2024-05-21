CREATE TABLE Sessions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate TIMESTAMP,
    enddate TIMESTAMP,
    status VARCHAR(255)
);

INSERT INTO Sessions (title, startdate, enddate, status)
VALUES
  ('Morning session', '2024-05-24 09:00:00', '2024-05-24 11:00:00', 'available'),
  ('Evening session', '2024-05-24 17:00:00', '2024-05-24 19:00:00', 'available'),
  ('Morning session', '2024-05-25 09:00:00', '2024-05-25 11:00:00', 'available'),
  ('Evening session', '2024-05-25 17:00:00', '2024-05-25 19:00:00', 'available'),
  ('Morning session', '2024-05-26 09:00:00', '2024-05-26 11:00:00', 'available'),
  ('Evening session', '2024-05-26 17:00:00', '2024-05-26 19:00:00', 'available'),
  ('Morning session', '2024-05-27 09:00:00', '2024-05-27 11:00:00', 'available'),
  ('Evening session', '2024-05-27 17:00:00', '2024-05-27 19:00:00', 'available'),
  ('Morning session', '2024-05-28 09:00:00', '2024-05-28 11:00:00', 'available'),
  ('Evening session', '2024-05-28 17:00:00', '2024-05-28 19:00:00', 'available'),
  ('Morning session', '2024-05-29 09:00:00', '2024-05-29 11:00:00', 'available'),
  ('Evening session', '2024-05-29 17:00:00', '2024-05-29 19:00:00', 'available'),
  ('Morning session', '2024-05-30 09:00:00', '2024-05-30 11:00:00', 'available'),
  ('Evening session', '2024-05-30 17:00:00', '2024-05-30 19:00:00', 'available'),
  ('Morning session', '2024-05-31 09:00:00', '2024-05-31 11:00:00', 'available'),
  ('Evening session', '2024-05-31 17:00:00', '2024-05-31 19:00:00', 'available'),
  ('Morning session', '2024-06-01 09:00:00', '2024-06-01 11:00:00', 'available'),
  ('Evening session', '2024-06-01 17:00:00', '2024-06-01 19:00:00', 'available'),
  ('Morning session', '2024-06-02 09:00:00', '2024-06-02 11:00:00', 'available'),
  ('Evening session', '2024-06-02 17:00:00', '2024-06-02 19:00:00', 'available'),
  ('Morning session', '2024-06-03 09:00:00', '2024-06-03 11:00:00', 'available'),
  ('Evening session', '2024-06-03 17:00:00', '2024-06-03 19:00:00', 'available'),
  ('Morning session', '2024-06-04 09:00:00', '2024-06-04 11:00:00', 'available'),
  ('Evening session', '2024-06-04 17:00:00', '2024-06-04 19:00:00', 'available'),
  ('Morning session', '2024-06-05 09:00:00', '2024-06-05 11:00:00', 'available'),
  ('Evening session', '2024-06-05 17:00:00', '2024-06-05 19:00:00', 'available'),
  ('Morning session', '2024-06-06 09:00:00', '2024-06-06 11:00:00', 'available'),
  ('Evening session', '2024-06-06 17:00:00', '2024-06-06 19:00:00', 'available');


  CREATE TABLE Volunteers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL
);

INSERT INTO Volunteers (name, email, phone_number)
VALUES
  ('Elena', 'elena@gmail.com', '07391857653'),
  ('Paulina', 'paulina@gmail.com', '07391857651'),
  ('Anu', 'anu@gmail.com', '07391857652'),
  ('Afsha', 'afsha@gmail.com', '07391857654'),
  ('Shadi', 'shadi@gmail.com', '07391857655'),
  ('Junita', 'junita@gmail.com', '07391857656'),
  ('Saliha', 'saliha@gmail.com', '07391857657'),
  ('Onur', 'onur@gmail.com', '07391857658'),
  ('Bekir', 'bekir@gmail.com', '07391857659'),
  ('Saqib', 'saqib@gmail.com', '07391857660');

  CREATE TABLE Bookings (
    booking_id SERIAL PRIMARY KEY,
    session_id INT REFERENCES Sessions(id) NOT NULL,
    volunteer_id INT REFERENCES Volunteers(id) NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);











