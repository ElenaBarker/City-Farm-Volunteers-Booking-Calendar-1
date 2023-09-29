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

