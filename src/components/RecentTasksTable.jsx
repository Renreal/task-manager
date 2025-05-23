import React from 'react'
import RecentTasks from "./templates/ RecentTasks.jsx"
import kyle from "../assets/images/kyle.jpg"
import marien from "../assets/images/marien.jpg";

const sampleTasks = [
    {
      title: "Buy Fruits",
      assigner: "Marien Bernasor",
      assignerImage: marien,
      assignee: "Kyle Atuel",
      assigneeImage: kyle,
      date: "22 Mar 2024 8:15am",
      status: "Completed",
    }, {
      title: "Buy Fruits",
      assigner: "Marien Bernasor",
      assignerImage: marien,
      assignee: "Kyle Atuel",
      assigneeImage: kyle,
      date: "22 Mar 2024 8:15am",
      status: "Completed",
    },
    {
      title: "Fix Computer",
      assignee: "Neil Clifford Pagara",
      assigneeImage: kyle,
      assigner: "Ritzi April Lontoc",
      assignerImage: marien,
      date: "23 Mar 2024 9:00am",
      status: "In Progress",
    },{
      title: "Clean Office",
      assignee: "Christian Paul Flores",
      assigneeImage: kyle,
      assigner: "Lorence Palisan",
      assignerImage: marien,
      date: "23 Mar 2024 9:00am",
      status: "pending",
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