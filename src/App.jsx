import { useState } from "react";
import { initialTasks } from "./data/initialTasks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskStatistics from "./components/TaskStatistics";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const visibleTasks = tasks.filter(task => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  function addTask() {
    const newTask = {
      id: crypto.randomUUID(),
      title: "New Task",
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function clearAllTasks() {
    setTasks([]);
  }

  function deleteCompletedTasks() {
    setTasks(tasks.filter(task => !task.completed));
  }

  return (
      <div className="app">
        <Header />

        <TaskStatistics
            total={totalTasks}
            completed={completedTasks}
        />

        <div className="actions">
          <button onClick={addTask}>Add Task</button>

          <button
              onClick={deleteCompletedTasks}
              disabled={completedTasks === 0}
          >
            Delete Completed
          </button>

          <button
              onClick={clearAllTasks}
              disabled={totalTasks === 0}
          >
            Clear All
          </button>
        </div>

        <div className="filters">
          <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
          >
            Completed
          </button>

          <button
              className={filter === "pending" ? "active" : ""}
              onClick={() => setFilter("pending")}
          >
            Pending
          </button>
        </div>

        <TaskList
            tasks={visibleTasks}
            isEmpty={tasks.length === 0}
            onToggle={toggleTask}
            onDelete={deleteTask}
        />

        <Footer />
      </div>
  );
}

export default App;