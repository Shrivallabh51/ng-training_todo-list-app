import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteTask from "../Components/deleteTask";

test("calls deleteTask function on confirmation", () => {
  const mockDeleteTask = jest.fn();
  const mockTaskId = 1; // Replace with your actual TaskId
  const mockOnClose = jest.fn(); // Mock function to handle closing

  // Render the DeleteTask component with isOpen set to true
  render(
    <DeleteTask
      deleteTask={mockDeleteTask}
      TaskId={mockTaskId}
      isOpen={true}
      onClose={mockOnClose} // Pass onClose prop
    />
  );

  // Click the Yes button to confirm deletion
  fireEvent.click(screen.getByRole("button", { name: /Yes/i }));

  // Expect the mock deleteTask function to be called with the correct TaskId
  expect(mockDeleteTask).toHaveBeenCalledWith(mockTaskId);
  expect(mockDeleteTask).toHaveBeenCalledTimes(1);
  expect(mockOnClose).toHaveBeenCalled(); // Ensure the modal close function was called
});

test("closes the modal on clicking No", () => {
  const mockDeleteTask = jest.fn();
  const mockTaskId = 1; // Replace with your actual TaskId
  const mockOnClose = jest.fn(); // Mock function to handle closing

  // Render the DeleteTask component with isOpen set to true
  render(
    <DeleteTask
      deleteTask={mockDeleteTask}
      TaskId={mockTaskId}
      isOpen={true}
      onClose={mockOnClose} // Pass onClose prop
    />
  );

  // Click the No button to cancel deletion
  fireEvent.click(screen.getByRole("button", { name: /No/i }));

  // Expect the onClose function to be called
  expect(mockOnClose).toHaveBeenCalled();
});
