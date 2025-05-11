import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "../styles/Admin.css";
import TaskCard from "../components/TaskCard";
import pendingIcon from "../assets/pending-icon.svg";
import progressIcon from "../assets/progress-icon.svg";
import completedIcon from "../assets/completed-icon.svg";
import RecentTasks from "../components/ RecentTasks";

export default function Admin() {
  return (
    <>
      <div className="admin-container">
        <SideBar />
        <div className="admin-page">
          <NavBar />
          <div className="admin-dashboard">
            <span id="dashboard-text">Dashboard</span>
            <div className="admin-content">
              <div className="admin-header">
                <TaskCard
                  number={11}
                  icon={pendingIcon}
                  description="Pending Tasks"
                  bgColor="#33ADD140"
                />
                <TaskCard
                  number={10}
                  icon={progressIcon}
                  description="Progress Tasks"
                  bgColor="#F6913440"
                />
                <TaskCard
                  number={15}
                  icon={completedIcon}
                  description="Completed Tasks"
                  bgColor="#64DA6940"
                />
              </div>
            </div>

            <RecentTasks />
          </div>
        </div>
      </div>
    </>
  );
}
