import "@testing-library/jest-dom";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../Components/TaskForm"; // Updated path

describe("TaskForm Component", () => {
  const mockTasks = [
    {
      id: 1,
      assignedTo: "User 1",
      status: "Not Started",
      dueDate: "2024-09-30",
      priority: "Normal",
      comment: "Test task comment",
    },
  ];

  const mockSetTasks = jest.fn();
  const mockSetIsEditing = jest.fn();
  const mockProps = {
    tasks: mockTasks,
    setTasks: mockSetTasks,
    isEditing: false,
    setIsEditing: mockSetIsEditing,
    EditId: null,
  };

  test("renders TaskForm and adds a new task", () => {
    render(<TaskForm {...mockProps} />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/assigned to/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();

    // Simulate filling the form fields
    fireEvent.change(screen.getByLabelText(/assigned to/i), {
      target: { value: "User 1" },
    });
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: "Not Started" },
    });
    fireEvent.change(screen.getByLabelText(/priority/i), {
      target: { value: "Normal" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Test Task Description" },
    });

    // Simulate clicking the save button
    fireEvent.click(screen.getByText(/save/i));

    // Ensure the setTasks function is called (task is added)
    expect(mockSetTasks).toHaveBeenCalledTimes(1);
  });

  test("renders TaskForm in editing mode", () => {
    const editProps = {
      ...mockProps,
      isEditing: true,
      EditId: 1,
    };

    render(<TaskForm {...editProps} />);

    // Check if fields are populated with the correct values from mockTasks
    expect(screen.getByLabelText(/assigned to/i).value).toBe("User 1");
    expect(screen.getByLabelText(/status/i).value).toBe("Not Started");
    expect(screen.getByLabelText(/priority/i).value).toBe("Normal");
    expect(screen.getByLabelText(/description/i).value).toBe(
      "Test task comment"
    );

    // Simulate clicking the edit button
    fireEvent.click(screen.getByText(/edit/i));

    // Ensure the setTasks function is called (task is edited)
    expect(mockSetTasks).toHaveBeenCalledTimes(2);
  });
});
