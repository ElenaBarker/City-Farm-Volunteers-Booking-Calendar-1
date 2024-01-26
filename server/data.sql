CREATE TABLE Sessions (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate TIMESTAMP,
    enddate TIMESTAMP,
    status VARCHAR(255)
);

INSERT INTO Sessions (title, startdate, enddate, status)
VALUES
  ('Morning session', '2024-02-01 09:00:00', '2024-02-01 11:00:00', 'available'),
  ('Evening session', '2024-02-01 17:00:00', '2024-02-01 19:00:00', 'available'),
  ('Morning session', '2023-11-02 09:00:00', '2023-11-02 11:00:00', 'available'),
  ('Evening session', '2023-11-02 17:00:00', '2023-11-02 19:00:00', 'available'),
  ('Morning session', '2023-11-03 09:00:00', '2023-11-03 11:00:00', 'available'),
  ('Evening session', '2023-11-03 17:00:00', '2023-11-03 19:00:00', 'available'),
  ('Morning session', '2023-11-04 09:00:00', '2023-11-04 11:00:00', 'available'),
  ('Evening session', '2023-11-04 17:00:00', '2023-11-04 19:00:00', 'available'),
  ('Morning session', '2023-11-05 09:00:00', '2023-11-05 11:00:00', 'available'),
  ('Evening session', '2023-11-05 17:00:00', '2023-11-05 19:00:00', 'available'),
  ('Morning session', '2023-11-06 09:00:00', '2023-11-06 11:00:00', 'available'),
  ('Evening session', '2023-11-06 17:00:00', '2023-11-06 19:00:00', 'available'),
  ('Morning session', '2023-11-07 09:00:00', '2023-11-07 11:00:00', 'available'),
  ('Evening session', '2023-11-07 17:00:00', '2023-11-07 19:00:00', 'available'),
  ('Morning session', '2023-11-08 09:00:00', '2023-11-08 11:00:00', 'available'),
  ('Evening session', '2023-11-08 17:00:00', '2023-11-08 19:00:00', 'available'),
  ('Morning session', '2023-11-09 09:00:00', '2023-11-09 11:00:00', 'available'),
  ('Evening session', '2023-11-09 17:00:00', '2023-11-09 19:00:00', 'available'),
  ('Morning session', '2023-11-10 09:00:00', '2023-11-10 11:00:00', 'available'),
  ('Evening session', '2023-11-10 17:00:00', '2023-11-10 19:00:00', 'available'),
  ('Morning session', '2023-11-11 09:00:00', '2023-11-11 11:00:00', 'available'),
  ('Evening session', '2023-11-11 17:00:00', '2023-11-11 19:00:00', 'available'),
  ('Morning session', '2023-11-12 09:00:00', '2023-11-12 11:00:00', 'available'),
  ('Evening session', '2023-11-12 17:00:00', '2023-11-12 19:00:00', 'available'),
  ('Morning session', '2023-11-13 09:00:00', '2023-11-13 11:00:00', 'available'),
  ('Evening session', '2023-11-13 17:00:00', '2023-11-13 19:00:00', 'available'),
  ('Morning session', '2023-11-14 09:00:00', '2023-11-14 11:00:00', 'available'),
  ('Evening session', '2023-11-14 17:00:00', '2023-11-14 19:00:00', 'available'),
  ('Morning session', '2023-11-15 09:00:00', '2023-11-15 11:00:00', 'available'),
  ('Evening session', '2023-11-15 17:00:00', '2023-11-15 19:00:00', 'available'),
  ('Morning session', '2023-11-16 09:00:00', '2023-11-16 11:00:00', 'available'),
  ('Evening session', '2023-11-16 17:00:00', '2023-11-16 19:00:00', 'available'),
  ('Morning session', '2023-11-17 09:00:00', '2023-11-17 11:00:00', 'available'),
  ('Evening session', '2023-11-17 17:00:00', '2023-11-17 19:00:00', 'available'),
  ('Morning session', '2023-11-18 09:00:00', '2023-11-18 11:00:00', 'available'),
  ('Evening session', '2023-11-18 17:00:00', '2023-11-18 19:00:00', 'available'),
  ('Morning session', '2023-11-19 09:00:00', '2023-11-19 11:00:00', 'available'),
  ('Evening session', '2023-11-19 17:00:00', '2023-11-19 19:00:00', 'available'),
  ('Morning session', '2023-11-20 09:00:00', '2023-11-20 11:00:00', 'available'),
  ('Evening session', '2023-11-20 17:00:00', '2023-11-20 19:00:00', 'available'),
  ('Morning session', '2023-11-21 09:00:00', '2023-11-21 11:00:00', 'available'),
  ('Evening session', '2023-11-21 17:00:00', '2023-11-21 19:00:00', 'available'),
  ('Morning session', '2023-11-22 09:00:00', '2023-11-22 11:00:00', 'available'),
  ('Evening session', '2023-11-22 17:00:00', '2023-11-22 19:00:00', 'available'),
  ('Morning session', '2023-11-23 09:00:00', '2023-11-23 11:00:00', 'available'),
  ('Evening session', '2023-11-23 17:00:00', '2023-11-23 19:00:00', 'available'),
  ('Morning session', '2023-11-24 09:00:00', '2023-11-24 11:00:00', 'available'),
  ('Evening session', '2023-11-24 17:00:00', '2023-11-24 19:00:00', 'available'),
  ('Morning session', '2023-11-25 09:00:00', '2023-11-25 11:00:00', 'available'),
  ('Evening session', '2023-11-25 17:00:00', '2023-11-25 19:00:00', 'available'),
  ('Morning session', '2023-11-26 09:00:00', '2023-11-26 11:00:00', 'available'),
  ('Evening session', '2023-11-26 17:00:00', '2023-11-26 19:00:00', 'available'),
  ('Morning session', '2023-11-27 09:00:00', '2023-11-27 11:00:00', 'available'),
  ('Evening session', '2023-11-27 17:00:00', '2023-11-27 19:00:00', 'available'),
  ('Morning session', '2023-11-28 09:00:00', '2023-11-28 11:00:00', 'available'),
  ('Evening session', '2023-11-28 17:00:00', '2023-11-28 19:00:00', 'available'),
  ('Morning session', '2023-11-29 09:00:00', '2023-11-29 11:00:00', 'available'),
  ('Evening session', '2023-11-29 17:00:00', '2023-11-29 19:00:00', 'available'),
  ('Morning session', '2023-11-30 09:00:00', '2023-11-30 11:00:00', 'available'),
  ('Evening session', '2023-11-30 17:00:00', '2023-11-30 19:00:00', 'available');


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











