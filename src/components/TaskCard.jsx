import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="task-card">
      <div className="task-content">
        <h3 className="task-title">
          <i className="fas fa-check-circle task-icon"></i> {task.title}
        </h3>
        <p className="task-description">
          {task.description || "Sin descripción"}
        </p>
      </div>
      <div className="task-actions">
        <button 
          className="delete-btn" 
          onClick={() => deleteTask(task.id)}
          aria-label="Eliminar tarea"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;