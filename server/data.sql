CREATE TABLE Sessions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate TIMESTAMP,
    enddate TIMESTAMP,
    status VARCHAR(255)
);

INSERT INTO Sessions (title, startdate, enddate, status)
VALUES
  ('Morning session', '2024-02-14 09:00:00', '2024-02-14 11:00:00', 'available'),
  ('Evening session', '2024-02-14 17:00:00', '2024-02-14 19:00:00', 'available'),
  ('Morning session', '2024-02-15 09:00:00', '2024-02-15 11:00:00', 'available'),
  ('Evening session', '2024-02-15 17:00:00', '2024-02-15 19:00:00', 'available'),
  ('Morning session', '2024-02-16 09:00:00', '2024-02-16 11:00:00', 'available'),
  ('Evening session', '2024-02-16 17:00:00', '2024-02-16 19:00:00', 'available'),
  ('Morning session', '2024-02-17 09:00:00', '2024-02-17 11:00:00', 'available'),
  ('Evening session', '2024-02-17 17:00:00', '2024-02-17 19:00:00', 'available'),
  ('Morning session', '2024-02-18 09:00:00', '2024-02-18 11:00:00', 'available'),
  ('Evening session', '2024-02-18 17:00:00', '2024-02-18 19:00:00', 'available'),
  ('Morning session', '2024-02-19 09:00:00', '2024-02-19 11:00:00', 'available'),
  ('Evening session', '2024-02-19 17:00:00', '2024-02-19 19:00:00', 'available'),
  ('Morning session', '2024-02-20 09:00:00', '2024-02-20 11:00:00', 'available'),
  ('Evening session', '2024-02-20 17:00:00', '2024-02-20 19:00:00', 'available'),
  ('Morning session', '2024-02-21 09:00:00', '2024-02-21 11:00:00', 'available'),
  ('Evening session', '2024-02-21 17:00:00', '2024-02-21 19:00:00', 'available'),
  ('Morning session', '2024-02-23 09:00:00', '2024-02-23 11:00:00', 'available'),
  ('Evening session', '2024-02-23 17:00:00', '2024-02-23 19:00:00', 'available'),
  ('Morning session', '2024-02-25 09:00:00', '2024-02-25 11:00:00', 'available'),
  ('Evening session', '2024-02-25 17:00:00', '2024-02-25 19:00:00', 'available'),
  ('Morning session', '2024-02-26 09:00:00', '2024-02-26 11:00:00', 'available'),
  ('Evening session', '2024-02-26 17:00:00', '2024-02-26 19:00:00', 'available'),
  ('Morning session', '2024-02-27 09:00:00', '2024-02-27 11:00:00', 'available'),
  ('Evening session', '2024-02-27 17:00:00', '2024-02-27 19:00:00', 'available'),
  ('Morning session', '2024-02-28 09:00:00', '2024-02-28 11:00:00', 'available'),
  ('Evening session', '2024-02-28 17:00:00', '2024-02-28 19:00:00', 'available'),
  ('Morning session', '2024-02-29 09:00:00', '2024-02-29 11:00:00', 'available'),
  ('Evening session', '2024-02-29 17:00:00', '2024-02-29 19:00:00', 'available');


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











