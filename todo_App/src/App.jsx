import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Load tasks from localStorage (on mount)
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTaskList(savedTasks);
    }
  }, []);

  // Save tasks to localStorage (on update)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTaskList([
      ...taskList,
      { id: Date.now(), text: task, completed: false },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Todo App
        </h1>

        {/* Form */}
        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-green-600 cursor-pointer transition"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-3">
          {taskList.length === 0 && (
            <p className="text-center text-gray-400">
              No tasks yet. Add one 🚀
            </p>
          )}

          {taskList.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-md shadow-sm transition
              ${task.completed ? "bg-green-100" : "bg-gray-50"}`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer flex-1
                ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                className="ml-3 text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
