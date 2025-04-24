import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Spinner({ isLoading, children }: { isLoading: boolean; children: React.ReactNode }) {
    if (isLoading) {
        return (
            <div className="inline-flex items-center justify-center">
                <Loader2 className="h-4 w-4 animate-spin" />
            </div>
        );
    }
    return children;
}
