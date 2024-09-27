import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function deleteTask(props) {
  const { deleteTask, TaskId } = props;
  return (
    <div
      className="modal fade"
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
            {" "}
            {/* Red background */}
            <h3 className="modal-title text-center w-100">Delete Task</h3>
            <button
              type="button"
              className="btn-close btn-close-white" // White close button for better visibility
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
              aria-label="Close"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-dismiss="modal"
              aria-label="Close"
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

export default deleteTask;
