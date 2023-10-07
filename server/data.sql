CREATE TABLE Slots (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate TIMESTAMP,
    enddate TIMESTAMP
);

INSERT INTO Slots (title, startdate, enddate)
VALUES
  ('Morning session', '2023-09-27 09:00:00', '2023-09-27 11:00:00'),
  ('Evening session', '2023-09-27 17:00:00', '2023-09-27 19:00:00'),
  ('Morning session', '2023-09-28 09:00:00', '2023-09-28 11:00:00'),
  ('Evening session', '2023-09-28 17:00:00', '2023-09-28 19:00:00'),
  ('Morning session', '2023-09-29 09:00:00', '2023-09-29 11:00:00'),
  ('Evening session', '2023-09-29 17:00:00', '2023-09-29 19:00:00'),
  ('Morning session', '2023-10-03 09:00:00', '2023-10-03 11:00:00'),
  ('Evening session', '2023-10-03 17:00:00', '2023-10-03 19:00:00'),
  ('Morning session', '2023-10-05 09:00:00', '2023-10-05 11:00:00'),
  ('Evening session', '2023-10-05 17:00:00', '2023-10-05 19:00:00'),
  ('Morning session', '2023-10-06 09:00:00', '2023-10-06 11:00:00'),
  ('Evening session', '2023-10-06 17:00:00', '2023-10-06 19:00:00'),
  ('Morning session', '2023-10-07 09:00:00', '2023-10-07 11:00:00'),
  ('Evening session', '2023-10-07 17:00:00', '2023-10-07 19:00:00'),
  ('Morning session', '2023-10-08 09:00:00', '2023-10-08 11:00:00'),
  ('Evening session', '2023-10-08 17:00:00', '2023-10-08 19:00:00'),
  ('Morning session', '2023-10-09 09:00:00', '2023-10-09 11:00:00'),
  ('Evening session', '2023-10-09 17:00:00', '2023-10-09 19:00:00'),
  ('Morning session', '2023-10-10 09:00:00', '2023-10-10 11:00:00'),
  ('Evening session', '2023-10-10 17:00:00', '2023-10-10 19:00:00'),
  ('Morning session', '2023-10-11 09:00:00', '2023-10-11 11:00:00'),
  ('Evening session', '2023-10-11 17:00:00', '2023-10-11 19:00:00'),
  ('Morning session', '2023-10-12 09:00:00', '2023-10-12 11:00:00'),
  ('Evening session', '2023-10-12 17:00:00', '2023-10-12 19:00:00');

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



