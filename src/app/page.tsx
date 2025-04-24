import TodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";
import { ModeToggle } from "@/components/ToggleMode";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ModeToggle />
      <div className="container mx-auto px-4 py-16 space-y-12">
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
