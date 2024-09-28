import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function DeleteTask({ deleteTask, TaskId, isOpen }) {
  if (!isOpen) return null; // Render nothing if modal is not open

  return (
    <div
      className="modal fade show" // Use 'show' to display the modal
      style={{ display: "block" }} // Ensure the modal is displayed
      id="DeleteModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "80%", maxWidth: "80%" }}
      >
        <div className="modal-content" style={{ height: "50vh" }}>
          <div className="modal-header bg-danger text-white">
            <h3 className="modal-title text-center w-100">Delete Task</h3>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div className="modal-body">
            <p>Do you want to delete this task?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              aria-label="No"
              name="No"
              onClick={() => {
                /* Optionally handle No action */
              }}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
              aria-label="Yes"
              onClick={() => deleteTask(TaskId)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTask;
