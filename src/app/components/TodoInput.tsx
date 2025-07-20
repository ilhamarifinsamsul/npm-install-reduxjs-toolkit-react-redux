"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../lib/features/todoSlice";

export const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600 transition-colors"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};
