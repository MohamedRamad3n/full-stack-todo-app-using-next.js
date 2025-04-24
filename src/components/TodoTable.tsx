import { getTodosAction } from "../../server/actions/todo-action";
import { TodoTableClient } from "./TodoTableClient";

// Server component that fetches data
export async function TodoTable() {
    const todos = await getTodosAction();
    return <TodoTableClient todos={todos} />;
}