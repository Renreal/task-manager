import React from "react";
import AdminAssignerTable from "../AdminAssignerTable";
import kyle from "../../assets/images/kyle.jpg";
import marien from "../../assets/images/marien.jpg";

export default function AdminAssignerTasks() {
  const sampleTasks = [
    {
      title: "Buy Fruits",
      assigner: "Marien Bernasor",
      assignerImage: marien,
      department: "RND"
      
    },
    {
      title: "Buy Fruits",
      assigner: "Marien Bernasor",
      assignerImage: marien,
      department: "RND"
      
    },
    {
      title: "Fix Computer",
      assigner: "Ritzi April Lontoc",
      assignerImage: marien,
      department: "RND"
      
    },
    {
      title: "Clean Office",
      assigner: "Lorence Palisan",
      assignerImage: marien,
      department: "RND"
      
    },
  ];

  return (
    <div style={{width : "557px"}}>
      <AdminAssignerTable
        tableTitle="Assigners"
        tasks={sampleTasks}
        onViewClick={(task) => console.log("Clicked task:", task)}
      />
    </div>
  );
}
