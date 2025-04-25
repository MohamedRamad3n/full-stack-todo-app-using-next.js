import TodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          {userId && <TodoForm userId={userId} />}
        </div>
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          {userId && <TodoTable userId={userId} />}
        </div>
      </div>
    </div>
  );
}
