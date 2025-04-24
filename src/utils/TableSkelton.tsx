import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton() {
    const rows = Array.from({ length: 12 });

    return (
        <div className="rounded-md border">
            <div className="grid grid-cols-4 gap-4 border-b p-4 font-semibold text-sm text-muted-foreground">
                <div>Title</div>
                <div>Description</div>
                <div>Status</div>
                <div>Actions</div>
            </div>
            {rows.map((_, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 border-b p-4 items-center">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
            ))}
        </div>
    );
}
