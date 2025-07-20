import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <div className="w-full max-w-md">
        <TodoInput />
        <TodoList />
      </div>
    </main>
  );
}
