import { TodoTable } from "@/components/TodoTable";
import { getTodosAction } from "../../server/actions/todo-action";
import TodoForm from "@/components/TodoForm";
import { ModeToggle } from "@/components/ToggleMode";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 space-y-12">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Task Management
            </h1>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Manage your tasks efficiently and stay organized
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          <TodoForm />
        </div>

        {/* Table Card */}
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          <TodoTable />
        </div>

      </div>
    </div>
  );
}
