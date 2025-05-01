import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext)

  return (
    <section className="tasks-section">
      <div className="tasks-header">
        <h2 className="tasks-title">
          <i className="fas fa-list-check"></i> Mis Tareas
          <span className="task-count">{tasks.length}</span>
        </h2>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-clipboard-list empty-icon"></i>
          <h3>No hay tareas todavía</h3>
          <p>Agrega una nueva tarea usando el formulario</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;
