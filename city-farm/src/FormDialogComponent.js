import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function FormDialog({ session, volunteers }) {
  const [open, setOpen] = useState(session);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleAddBooking = async (selectedSession) => {
    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: session.id,
          volunteer_id: selectedVolunteer,
        }),
      });
      if (!response.ok) {
        throw Error(`Failed to add video. Error: ${response.status}`);
      }

      setOpen(false);
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setSelectedVolunteer(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book the session</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To book the session, please provide your name.
          </DialogContentText>
          <Select onChange={handleChange}>
            {volunteers.map((volunteer, index) => (
              <MenuItem key={index} value={volunteer.id}>
                {volunteer.name}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddBooking}>Book</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
