CREATE TABLE Slots (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    startdate DATE,
    enddate DATE
);

INSERT INTO Slots (title, startdate, enddate)
VALUES
  ('Morning session', '2023-09-27 09:00:00', '2023-09-27 11:00:00'),
  ('Evening session', '2023-09-27 17:00:00', '2023-09-27 19:00:00'),
  ('Morning session', '2023-09-28 09:00:00', '2023-09-28 11:00:00'),
  ('Evening session', '2023-09-28 17:00:00', '2023-09-28 19:00:00'),
  ('Morning session', '2023-09-29 09:00:00', '2023-09-29 11:00:00'),
  ('Evening session', '2023-09-29 17:00:00', '2023-09-29 19:00:00');

INSERT INTO Slots (title, startdate, enddate)
VALUES
  ('Morning session', '2023-10-03 09:00:00', '2023-09-27 11:00:00'),
  ('Evening session', '2023-10-03 17:00:00', '2023-09-27 19:00:00'),
  ('Morning session', '2023-10-05 09:00:00', '2023-09-28 11:00:00'),
  ('Evening session', '2023-10-05 17:00:00', '2023-09-28 19:00:00'),
  ('Morning session', '2023-10-06 09:00:00', '2023-09-29 11:00:00'),
  ('Evening session', '2023-10-06 17:00:00', '2023-09-29 19:00:00'),
  ('Morning session', '2023-10-07 09:00:00', '2023-09-27 11:00:00'),
  ('Evening session', '2023-10-07 17:00:00', '2023-09-27 19:00:00'),
  ('Morning session', '2023-10-08 09:00:00', '2023-09-28 11:00:00'),
  ('Evening session', '2023-10-08 17:00:00', '2023-09-28 19:00:00'),
  ('Morning session', '2023-10-09 09:00:00', '2023-09-29 11:00:00'),
  ('Evening session', '2023-10-09 17:00:00', '2023-09-29 19:00:00'),
  ('Morning session', '2023-10-10 09:00:00', '2023-09-27 11:00:00'),
  ('Evening session', '2023-10-10 17:00:00', '2023-09-27 19:00:00'),
  ('Morning session', '2023-10-11 09:00:00', '2023-09-28 11:00:00'),
  ('Evening session', '2023-10-11 17:00:00', '2023-09-28 19:00:00'),
  ('Morning session', '2023-10-12 09:00:00', '2023-09-29 11:00:00'),
  ('Evening session', '2023-10-12 17:00:00', '2023-09-29 19:00:00');