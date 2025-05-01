import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark"; // Modo oscuro por defecto
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <h1 className="app-title">
            <i className="fas fa-tasks"></i> TaskMaster
          </h1>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === "light" ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <TaskForm />
          <TaskList />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>TaskMaster &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
