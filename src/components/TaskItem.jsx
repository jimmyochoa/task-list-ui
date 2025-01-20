import { Badge, Button } from "flowbite-react";

const TaskItem = ({ task, onEditClick, onDeleteClick }) => {
  return (
    <li className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <span className="text-lg font-medium text-gray-700">{task.name}</span>
      </div>
      <div className="flex items-center space-x-4">
        <Badge color={task.color} className="text-sm px-3 py-1">{task.status}</Badge>
        <Button
          size="md"
          color="gray"
          className="text-sm px-4 py-2"
          onClick={() => onEditClick(task)}
        >
          Edit
        </Button>
        <Button
          size="md"
          gradientDuoTone="purpleToPink"
          className="text-sm px-4 py-2"
          onClick={() => onDeleteClick(task.id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
