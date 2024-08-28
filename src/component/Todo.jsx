import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

const Todo = () => {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.todo);

  return (
    <div className="max-w-md mx-auto mt-8">
      <Form />
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
              todo.isDone ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => dispatch(markAsDone(todo.id))}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <span
                className={`text-lg ${
                  todo.isDone ? "line-through text-gray-500" : "text-gray-900"
                }`}
              >
                {todo.task}
              </span>
              <span
                className={`text-sm ${
                  todo.isDone ? "line-through text-gray-500" : "text-gray-600"
                }`}
              >
                {new Date(todo.date).toLocaleDateString()}
              </span>
              <span
                className={`text-sm ${
                  todo.isDone ? "line-through text-gray-500" : "text-gray-600"
                }`}
              >
                Priority: {todo.priority}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
