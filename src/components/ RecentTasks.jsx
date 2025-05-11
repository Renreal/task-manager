import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/RecentTasks.css";
import kyle from "../assets/images/kyle.jpg";
import marien from "../assets/images/marien.jpg";
export default function RecentTasks() {
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
          sx={{
            minWidth: 650,
            width: "100%",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={7}
                sx={{ borderBottom: "none", padding: "3px" }}
              >
                <div className="table-title">
                  <span>Recent Tasks</span>
                  <a>View All</a>
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
                Assigner
              </TableCell>
              <TableCell align="center" sx={{ padding: "15px" }}>
                Assignee
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
            <TableRow>
              <TableCell component="th" scope="row" sx={{ padding: "5px" }}>
                1
              </TableCell>
              <TableCell align="center">Buy Fruits</TableCell>
              <TableCell align="center" className="Assignee">
                <img src={kyle} alt="" />
                <span>Kyle Atuel</span>
              </TableCell>
              <TableCell align="center">
                <img src={marien} alt="" />
                <span>Marien Bernasor</span>
              </TableCell>
              <TableCell align="center">22 Mar 2024 8:15am</TableCell>
              <TableCell align="center" className="status"> <span>Completed</span></TableCell>
              <TableCell align="center" className="view-action"><span>View</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ padding: "5px" }}>
                2
              </TableCell>
              <TableCell align="center">Buy Fruits</TableCell>
              <TableCell align="center" className="Assignee">
                <img src={kyle} alt="" />
                <span>Kyle Atuel</span>
              </TableCell>
              <TableCell align="center">
                <img src={marien} alt="" />
                <span>Marien Bernasor</span>
              </TableCell>
              <TableCell align="center">22 Mar 2024 8:15am</TableCell>
              <TableCell align="center" className="status"> <span>Completed</span></TableCell>
              <TableCell align="center" className="view-action"><span>View</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ padding: "5px" }}>
                3
              </TableCell>
              <TableCell align="center">Buy Fruits</TableCell>
              <TableCell align="center" className="Assignee">
                <img src={kyle} alt="" />
                <span>Kyle Atuel</span>
              </TableCell>
              <TableCell align="center">
                <img src={marien} alt="" />
                <span>Marien Bernasor</span>
              </TableCell>
              <TableCell align="center">22 Mar 2024 8:15am</TableCell>
              <TableCell align="center" className="status in-progress"> <span>In Progress</span></TableCell>
              <TableCell align="center" className="view-action"><span>View</span></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" sx={{ padding: "5px" }}>
                4
              </TableCell>
              <TableCell align="center">Buy Fruits</TableCell>
              <TableCell align="center" className="Assignee">
                <img src={kyle} alt="" />
                <span>Kyle Atuel</span>
              </TableCell>
              <TableCell align="center">
                <img src={marien} alt="" />
                <span>Marien Bernasor</span>
              </TableCell>
              <TableCell align="center">22 Mar 2024 8:15am</TableCell>
              <TableCell align="center" className="status pending"> <span>Pending</span></TableCell>
              <TableCell align="center" className="view-action"><span>View</span></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
