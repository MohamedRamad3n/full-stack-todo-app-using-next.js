import TableSkeleton from "@/utils/TableSkelton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 space-y-12">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-10 w-64 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
            <div className="mt-1 h-6 w-96 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Form Card Skeleton */}
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>

        {/* Table Card Skeleton */}
        <div className="rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 shadow-md backdrop-blur-md">
          <TableSkeleton />
        </div>
      </div>
    </div>
  );
} 