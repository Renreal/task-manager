import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles/AdminAssignerTasks.css"


export default function AdminAssignerTable({ tableTitle, tasks = [], onViewClick }) {
  return (
    <div className="admin-footer-table">
      <TableContainer
        className="recent-tasks-table-container"
        sx={{ maxHeight: 300, overflow: "auto" }}
      >
        <Table
          stickyHeader
          aria-label="Recent Tasks"
          className="recent-tasks-inner-table"
          sx={{ minWidth: 650, width: "100%" }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={7}
                sx={{ borderBottom: "none", padding: "" }}
              >
                <div className="table-title">
                  <span>{tableTitle}</span>
                  <a href="#">View All</a>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="left"
                className="numCell"
              >
                No.
              </TableCell>
              <TableCell align="left">
                Name
              </TableCell>
              <TableCell align="left">
                Email Address
              </TableCell>
              <TableCell align="left">
                Department
              </TableCell>
              <TableCell align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="table-body">
            {tasks.map((task, index) => (
              <TableRow key={task.id || index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{task.title}</TableCell>

                <TableCell align="left">
                  <img src={task.assignerImage} alt={task.assigner} />
                  <span>{task.assigner}</span>
                </TableCell>

                <TableCell align="left">{task.department}</TableCell>

                <TableCell align="left" className="view-action">
                  <span onClick={() => onViewClick?.(task)}>View</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
