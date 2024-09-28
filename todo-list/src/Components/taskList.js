import React from "react";
import "../Css/Form.css";

const TaskList = (props) => {
  const { tasks, setTaskId, setIsEditing, setEditId } = props;

  const handleChange = (id) => {
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <table className="table table-borderless m-4">
      <thead>
        <tr>
          <th style={{ width: "10px" }}>
            <input type="checkbox" />
          </th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">
              No tasks available
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr key={task.id} className="task-row">
              <td>
                <input type="checkbox" />
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comment}</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Task actions"
                  >
                    &#9662; {/* Down arrow symbol */}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="bg-warning">
                      <button
                        className="dropdown-item"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#newTaskModal"
                        onClick={() => handleChange(task.id)}
                      >
                        Edit
                      </button>
                    </li>
                    <li className="bg-warning">
                      <button
                        className="dropdown-item"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#DeleteModal"
                        onClick={() => setTaskId(task.id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskList;
