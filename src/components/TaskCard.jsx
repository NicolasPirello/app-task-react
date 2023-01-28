import { TaskContext } from "../context/TaskContext"
import { useEffect, useContext } from "react";


function TaskCard ({ task }) {

  const { deleteTask } = useContext(TaskContext)

  return (
    <>
        <div className="taskCard-container">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            {/* Ejecutar una funcion flecha dentro de un evento es porque quiero pasarle un parametro, pero si no lo hago asi la funcion se ejecuta al cargar la pagina, es por eso que se ejecuta una funcion anonima que si se le da click va a ejecutar la funcion que estamos buscando ejecutar desde un principio. */}
            <button className="taskCard-container__btn" onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    </>
  )
}


export default TaskCard;