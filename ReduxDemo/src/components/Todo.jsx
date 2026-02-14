import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone, unMarkAsDone } from "../features/todo/todoSlice";
import Form from "./Form";

export default function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleDone(id){
    dispatch(markAsDone(id));
  }

  function handleUnDone(id){
    dispatch(unMarkAsDone(id));
  }

  return (
    <>
      <Form />
      <h3>Todo</h3>
      <ul>
        {todos.map((todo) => {
          return todo.isDone ? (
            <li
              key={todo.id}
              style={{
                listStyleType: "none",
                width: "60vh",
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
                textDecorationLine: "line-through",
              }}
            >
              {todo.task}{" "}
              <button
                onClick={() => handleDelete(todo.id)}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </button>
              <button
                onClick={() => handleUnDone(todo.id)}
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Unmark As Done
              </button>
            </li>
          ) : (
            <li
              key={todo.id}
              style={{
                listStyleType: "none",
                width: "60vh",
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              {todo.task}{" "}
              <button
                onClick={() => handleDelete(todo.id)}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </button>
              <button
                onClick={() => handleDone(todo.id)}
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Mark As Done
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
