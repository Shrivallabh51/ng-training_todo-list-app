import { FaSearch } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

import "../Css/Navbar.css";
const NavBar = (props) => {
  const { tasks } = props;
  return (
    <div className="border-bottom border-secondary">
      {/* Navigation Bar */}
      <nav className="navbar navbar-light bg-light p-3">
        <div className="container-fluid">
          {/* Logo and Title */}
          <div>
            <div className="d-flex align-items-center  h-80">
              <FaTasks className="task-logo" />
              <div className="d-flex flex-column p-2">
                <span className="navbar-brand mb-0 h1 ms-2">Tasks</span>
                <span className="text-muted">All Tasks</span>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <p style={{ fontSize: "13px" }}>{tasks.length} records</p>
            </div>
          </div>

          {/* Buttons (New Task and Refresh) */}
          <div className="d-flex flex-column p-0 m-0">
            <div className="d-flex w-100">
              <button
                className="btn custom-btn btn-warning rounded-0 border-secondary flex-grow-1"
                data-bs-toggle="modal"
                data-bs-target="#newTaskModal" // This ID should match the modal ID
              >
                New Task
              </button>
              <button className="btn custom-btn btn-warning rounded-0 border-secondary flex-grow-1">
                Refresh
              </button>
            </div>
            {/* Search Bar */}
            <div className="search-container mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <FaSearch className="search-icon " />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
