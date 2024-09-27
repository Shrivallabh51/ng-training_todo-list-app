import "../Css/Form.css";

const taskList = (props) => {
  const { tasks, setTaskId, setIsEditing, setEditId } = props;

  const handleChange = (id) => {
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <>
      <table class="table table-borderless m-4">
        <tr>
          <td style={{ width: "10px" }}>
            <input type="checkbox"></input>
          </td>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
        </tr>
        {tasks.map((task) => (
          <tr key={task.id} style={{ borderBottom: "1px solid #d3d3d3" }}>
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
                      data-bs-target="#newTaskModal" // This ID should match the modal ID
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
        ))}
      </table>
    </>
  );
};
export default taskList;
