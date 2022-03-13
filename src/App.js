import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App(props) {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: "2",
      text: "Meeting at Office",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: "3",
      text: "Grocery Shopping",
      day: "Feb 7th at 12.30pm",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    // console.log(task);
    setTasks( (prevTasks)=> {
      return [...prevTasks, task]} );
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowForm(!showForm)} showF={showForm}/>
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
      <h2>No Tasks Found</h2>}
    </div>
  );
}

export default App;
