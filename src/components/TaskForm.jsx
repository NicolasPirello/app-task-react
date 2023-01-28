import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext"

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <>
      
      <section className="general-container">
      
        <h2 className="web-title">Aplicacion REACT | Lista de tareas: </h2>

        <form className="form-container" onSubmit={handleSubmit}>
          <input
            placeholder="Escribe tu Tarea: "
            value={title}
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder="Escribe una Descripcion: "
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button>Guardar</button>
        </form>

      </section>
    </>
  );
}

export default TaskForm;
