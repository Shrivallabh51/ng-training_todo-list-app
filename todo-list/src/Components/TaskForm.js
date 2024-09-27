import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function TaskForm(props) {
  const { tasks, setTasks, isEditing, setIsEditing, EditId } = props;

  // New task state
  const [newTask, setNewTask] = useState({
    id: "",
    assignedTo: "",
    status: "",
    dueDate: "",
    priority: "",
    comment: "",
  });

  // Effect to handle when in editing mode
  useEffect(() => {
    if (isEditing) {
      const taskToEdit = tasks.find((task) => task.id === EditId);
      if (taskToEdit) {
        setNewTask(taskToEdit); // Set the task to edit
      }

      //setTasks
    } else {
      // Reset form if not editing
      setNewTask({
        assignedTo: "",
        status: "",
        dueDate: "",
        priority: "",
        comment: "",
      });
    }
  }, [isEditing, EditId, tasks]);

  // Handle input change and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Add or update task function
  const addTask = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Make a copy of the task list to ensure immutability
      const updatedTasks = tasks.map((task) =>
        task.id === EditId ? { ...newTask } : task
      );

      setTasks(updatedTasks);
      setIsEditing(false);
    } else {
      // Add a new task
      const task = {
        id: Date.now(), // Generate unique ID
        ...newTask,
      };
      // Add a new task by creating a new array with the added task
      setTasks([...tasks, task]);
    }

    // Reset the form fields after adding/editing a task
    setNewTask({
      id: "",
      assignedTo: "",
      status: "",
      dueDate: "",
      priority: "",
      comment: "",
    });
  };

  const isSubmitDisabled =
    !newTask.assignedTo || !newTask.status || !newTask.priority;

  return (
    <div
      className="modal fade"
      id="newTaskModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "80%", maxWidth: "80%", height: "80%" }}
      >
        <div className="modal-content" style={{ height: "100%" }}>
          <div className="modal-header" style={{ height: "15%" }}>
            <h3 className="modal-title text-center w-100">New Task</h3>
          </div>
          <hr />
          <div className="modal-body" style={{ overflowY: "auto" }}>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="mb-2">
                    <span className="text-danger">*</span> Assigned To
                  </label>
                  <select
                    className="form-control"
                    name="assignedTo"
                    value={newTask.assignedTo}
                    onChange={handleInputChange}
                    style={{ backgroundColor: "#f8f9fa" }}
                  >
                    <option value="">Select User</option>
                    <option>User 1</option>
                    <option>User 2</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="mb-2">
                    <span className="text-danger">*</span>Status
                  </label>
                  <select
                    className="form-control"
                    name="status"
                    value={newTask.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option>Not Started</option>
                    <option>In Progress</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="mb-2">Due Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dueDate"
                    value={newTask.dueDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="mb-2">
                    <span className="text-danger">*</span> Priority
                  </label>
                  <select
                    className="form-control"
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Priority</option>
                    <option>Normal</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="col-12 mb-3">
                  <label className="mb-2">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="comment"
                    value={newTask.comment}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={addTask}
              disabled={isSubmitDisabled}
              data-bs-dismiss="modal"
            >
              {isEditing ? "Edit" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
