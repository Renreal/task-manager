import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../../styles/RecentTasks.css"

export default function RecentTasks({ tableTitle, tasks = [], onViewClick }) {
  return (
    <div className="recent-tasks-table">
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
                sx={{ borderBottom: "none", padding: "3px" }}
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
                sx={{ padding: "5px" }}
              >
                No.
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Task
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Assignee
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Assigner
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Date Created
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="table-body">
            {tasks.map((task, index) => (
              <TableRow key={task.id || index}>
                <TableCell component="th" scope="row" sx={{ padding: "5px" }}>
                  {index + 1}
                </TableCell>
                <TableCell align="center">{task.title}</TableCell>

                <TableCell align="center" className="Assignee">
                  <img src={task.assignerImage} alt={task.assigner} />
                  <span>{task.assigner}</span>
                </TableCell>

                <TableCell align="center">
                  <img src={task.assigneeImage} alt={task.assignee} />
                  <span>{task.assignee}</span>
                </TableCell>

                <TableCell align="center">{task.date}</TableCell>

                <TableCell
                  align="center"
                  className={`status ${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <span>{task.status}</span>
                </TableCell>

                <TableCell align="center" className="view-action">
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
