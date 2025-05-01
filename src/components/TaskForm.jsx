import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <section className="form-section">
      <div className="form-header">
        <h2 className="form-title">
          <i className="fas fa-clipboard-check"></i> Nueva Tarea
        </h2>
        <p className="form-subtitle">Añade una nueva tarea a tu lista</p>
      </div>
      
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            <i className="fas fa-clipboard-list"></i> Título
          </label>
          <input
            id="title"
            type="text"
            placeholder="¿Qué necesitas hacer?"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            <i className="fas fa-align-left"></i> Descripción
          </label>
          <textarea
            id="description"
            placeholder="Describe los detalles de la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button className="submit-btn" type="submit">
            <i className="fas fa-plus"></i> Añadir Tarea
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
