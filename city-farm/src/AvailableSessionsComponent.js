import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const AvailableSessionsComponent = ({ availableSessions }) => {
  return (
    <div className="manager-view-container">
      <h3 className="table-title">Available Sessions</h3>
      <div className="table-content">
        <TableContainer component={Paper} className="available-sessions">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="cell-names">Session Name</TableCell>
                <TableCell className="cell-names">Start Date</TableCell>
                <TableCell className="cell-names">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {availableSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell>{session.title}</TableCell>
                  <TableCell>
                    {new Date(session.start).toDateString()}
                  </TableCell>
                  <TableCell className="available-session">
                    {session.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AvailableSessionsComponent;
