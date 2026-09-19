import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Read React Docs", id: uuidv4(), isDone: false },
    { task: "Clean the Room", id: uuidv4(), isDone: false },
    { task: "Pay Electricity Bill", id: uuidv4(), isDone: false },
    { task: "Water the Plants", id: uuidv4(), isDone: false },
    { task: "Review Git Commits", id: uuidv4(), isDone: false },
    { task: "Clean Study Desk", id: uuidv4(), isDone: false },
    { task: "Exercise for 30 Min", id: uuidv4(), isDone: false },
    { task: "Watch React Video", id: uuidv4(), isDone: false },
    { task: "Update Portfolio", id: uuidv4(), isDone: false },
    { task: "Write Daily Notes", id: uuidv4(), isDone: false },
    { task: "Reply to Emails", id: uuidv4(), isDone: false },
    { task: "Attend Team Meeting", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      }),
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>

      <h2>Tasks Todo</h2>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className={todo.isDone ? "done-task" : ""}>{todo.task}</span>

            <div className="btn-group">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>

              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </div>
          </li>
        ))}
      </ul>

      <button className="mark-all-btn" onClick={markAllDone}>
        Mark All as Done
      </button>
    </div>
  );
}
