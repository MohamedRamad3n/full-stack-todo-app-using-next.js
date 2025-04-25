import { getTodosAction } from "../../server/actions/todo-action";
import { TodoTableClient } from "./TodoTableClient";

// Server component that fetches data
export async function TodoTable({ userId }: { userId: string }) {
    const todos = await getTodosAction(userId);
    return <TodoTableClient todos={todos} />;
}