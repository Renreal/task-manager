import React from 'react'
import RecentTasks from "./templates/ RecentTasks.jsx"
import kyle from "../assets/images/kyle.jpg"
import marien from "../assets/images/marien.jpg";

const sampleTasks = [
    {
      title: "Buy Fruits",
      assigner: "Kyle Atuel",
      assignerImage: kyle,
      assignee: "Marien Bernasor",
      assigneeImage: marien,
      date: "22 Mar 2024 8:15am",
      status: "Completed",
    },
    {
      title: "Team Meeting",
      assigner: "Marien Bernasor",
      assignerImage: marien,
      assignee: "Kyle Atuel",
      assigneeImage: kyle,
      date: "23 Mar 2024 9:00am",
      status: "In Progress",
    },
  ];
  
function RecentTasksTable() {
  return (
    <RecentTasks
    tableTitle="Recent Tasks"
    tasks={sampleTasks}
    onViewClick={(task) => console.log("Clicked task:", task)}
  />
  )
}

export default RecentTasksTable