import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function FormDialog({
  session,
  volunteers,
  onBook,
  setDialogOpen,
  dialogOpen,
}) {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleAddBooking = async () => {
    try {
      const response = await fetch(
        "https://pathway-city-farm-project-backend.onrender.com/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: session.id,
            volunteer_id: selectedVolunteer,
          }),
        }
      );
      if (response.ok) {
        onBook();
      } else if (response.status === 409) {
        alert("This session is already booked.");
      } else {
        throw Error(`Failed to book session. Error: ${response.status}`);
      }
    } catch (error) {}
    setDialogOpen(false);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleChange = (event) => {
    setSelectedVolunteer(event.target.value);
  };

  return (
    <div>
      <Dialog open={dialogOpen} onClose={handleClose}>
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
