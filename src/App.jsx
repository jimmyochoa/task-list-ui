import { useState } from "react";
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import { useTasks } from './hooks/useTasks';
import { Card, Badge, Button } from "flowbite-react";

function App() {
  const { tasks, handleEditClick, handleDeleteClick, handleSaveChanges, handleAddTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openModal = (task = null) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-3xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h5 className="text-2xl font-bold text-gray-800">My Tasks</h5>
          <div className="flex items-center space-x-4">
            <Badge color="indigo" className="text-lg">{tasks.length} tasks</Badge>
            <Button
              size="sm"
              gradientDuoTone="greenToBlue"
              onClick={() => openModal()}
            >
              Add Task
            </Button>
          </div>
        </div>
        <TaskList
          tasks={tasks}
          onEditClick={openModal}
          onDeleteClick={handleDeleteClick}
        />
      </Card>

      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        task={editingTask}
        onSaveChanges={handleSaveChanges}
      />
    </div>
  );
}

export default App;
