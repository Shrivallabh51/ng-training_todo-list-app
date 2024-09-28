import React, { useState } from "react"; // Import useState
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Pagination = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5); // State for items per page

  const handleItemsPerPageChange = (event) => {
    const value = Math.max(1, Number(event.target.value)); // Ensure a positive number
    setItemsPerPage(value); // Update the state
  };

  return (
    <div className="container mt-4 border-top border-secondary">
      <div
        className="d-flex justify-content-between align-items-center p-2"
        style={{ border: "1px solid #e0e0e0", backgroundColor: "#f8f8f8" }}
      >
        {/* Items per page control */}
        <div className="d-flex align-items-center">
          <input
            type="number"
            className="form-control"
            value={itemsPerPage} // Controlled input
            onChange={handleItemsPerPageChange} // Handle change
            style={{ width: "60px", marginRight: "10px" }}
            min="1" // Ensure at least 1 item per page
          />
        </div>

        {/* Pagination controls */}
        <div className="d-flex">
          <button className="btn btn-outline-secondary rounded-0 border-secondary flex-grow-1">
            <FaAngleDoubleLeft /> First
          </button>
          <button className="btn btn-outline-secondary rounded-0 border-secondary flex-grow-1">
            <FaAngleLeft /> Prev
          </button>
          <button className="btn btn-outline-secondary rounded-0 border-secondary flex-grow-1">
            1
          </button>
          <button className="btn btn-outline-secondary rounded-0 border-secondary flex-grow-1">
            <FaAngleRight /> Next
          </button>
          <button className="btn btn-outline-secondary rounded-0 border-secondary flex-grow-1">
            <FaAngleDoubleRight /> Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
