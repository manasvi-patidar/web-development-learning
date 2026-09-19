import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    console.log("deleted", id);
    dispatch(deleteTodo(id));
  };

  const doneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            &nbsp;
            <button onClick={() => doneHandler(todo.id)}>Done</button>
            &nbsp;
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
