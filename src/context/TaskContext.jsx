import { createContext, useState, useEffect } from "react";

/* Lo exporto con llaves porque en el archivo no uso Export Default sino solamente export. Uso el as data para nombrarlo asi y no tener conflictos con las variables */
import { task as data } from "../data/task";

/* Esta es la creacion de un contexto, el nombre del contexto. Este almacena los datos */
export const TaskContext = createContext();

/* Se llama Provider porque PROVEE de un contexto al resto. Es el componente que engloba al resto de los componentes */

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  { /* Uso el useEffect para montar apenas carga la aplicacion la informacion de task. Los [] los pongo para que solo se ejecute 1 VEZ. */}

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    /* Para filtrar lo hacemos asi, filter recibe en si el elemento (En este caso la tarea), ejecuta una flecha y dice si de ese tarea, su id es diferente al ID que te esta pasando la funcion (taskID) entonces dejalo, si ese elemento coincide SACALO del array. */
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
