import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditClick, onDeleteClick }) => {
  return (
    <div className="flow-root">
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
