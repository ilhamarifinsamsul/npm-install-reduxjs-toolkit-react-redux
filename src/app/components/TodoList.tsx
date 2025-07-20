"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../lib/store";
import { toggleTodo, removeTodo } from "../lib/features/todoSlice";

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-4 border rounded-md ${
              todo.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span
                className={`${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};
