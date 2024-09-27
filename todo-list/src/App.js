import "./App.css";
import NavBar from "./Components/NavBar";
import TaskList from "./Components/taskList";
import Pagination from "./Components/pagination";
import TaskForm from "./Components/TaskForm";
import DeleteTask from "./Components/deleteTask";
import { useState, useEffect } from "react";
import { TaskService } from "./services/TaskService";

function App() {
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks
    ? JSON.parse(savedTasks)
    : TaskService.getTasks();

  const [tasks, setTasks] = useState(initialTasks);
  const [TaskId, setTaskId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [EditId, setEditId] = useState("");

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log(tasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div
      className="App d-flex flex-column"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="" style={{ height: "20%" }}>
        <NavBar setTasks={setTasks} tasks={tasks} />
      </div>
      <div className="" style={{ height: "65%" }}>
        <TaskList
          setTasks={setTasks}
          tasks={tasks}
          deleteTask={deleteTask}
          TaskId={TaskId}
          setTaskId={setTaskId}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          EditId={EditId}
          setEditId={setEditId}
        />
      </div>
      <div className="" style={{ height: "15%" }}>
        <Pagination setTasks={setTasks} tasks={tasks} />
      </div>
      <TaskForm
        setTasks={setTasks}
        tasks={tasks}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        EditId={EditId}
      />
      <DeleteTask
        setTasks={setTasks}
        tasks={tasks}
        TaskId={TaskId}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
