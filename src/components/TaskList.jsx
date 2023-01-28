import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"
import { useContext } from "react";

function TaskList() {

  const { tasks } = useContext(TaskContext)

  {
    /* Aca va lo que se ve en la pagina, el return. */
  }

  if (tasks.length === 0) {
    return (
      <>
        <h1>No hay tareas aun</h1>
      </>
    );
  }

  return (
    <section className="taskList-container">
      {tasks.map((task, i) => (
        <TaskCard task={task} key={i} />
      ))}
    </section>
  );
}

export default TaskList;
