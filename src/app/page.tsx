import { getTodosAction } from "../../server/actions/todo-action";
import TodoForm from "@/components/TodoForm";

export default async function Home() {
  return (
    <div className="container mx-auto">
      <TodoForm />
    </div>
  );
}
