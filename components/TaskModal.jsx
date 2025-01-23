import { Modal, TextInput, Select, Button } from "flowbite-react";
import { useState, useEffect } from "react";

const TaskModal = ({ isOpen, onClose, task, onSaveChanges }) => {
  const [taskState, setTaskState] = useState({
    name: "",
    status: "Pending",
    color: "warning"
  });

  useEffect(() => {
    if (task) {
      setTaskState({ ...task });
    } else {
      setTaskState({ name: "", status: "Pending", color: "warning" });
    }
  }, [task, isOpen]);

  const handleSave = () => {
    onSaveChanges(taskState);
    onClose();
  };

  const handleInputChange = (e) => {
    setTaskState({ ...taskState, name: e.target.value });
  };

  const handleStatusChange = (e) => {
    const status = e.target.value;
    let color = "info";
    if (status === "Completed") color = "success";
    else if (status === "Pending") color = "warning";

    setTaskState({ ...taskState, status, color });
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>{task ? "Edit Task" : "Add Task"}</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <TextInput
            label="Task Name"
            value={taskState.name}
            onChange={handleInputChange}
          />
          <Select
            label="Status"
            value={taskState.status}
            onChange={handleStatusChange}
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
          </Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>{task ? "Save Changes" : "Add Task"}</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
