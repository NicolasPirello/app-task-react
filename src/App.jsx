import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

  return (
    <main className="main">
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
