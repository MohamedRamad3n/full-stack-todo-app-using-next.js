import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { truncateText } from "@/utils";
import TableAcions from "./TableAcions";

export function TodoTableClient({ todos }: { todos: any[] }) {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {todos.map((todo) => (
                        <TableRow key={todo.id}>
                            <TableCell className="font-medium">{truncateText(todo.title, 20)}</TableCell>
                            <TableCell>{truncateText(todo.description || "No Description Added", 20)}</TableCell>
                            <TableCell>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs ${todo.completed
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                        }`}
                                >
                                    {todo.completed ? "Completed" : "Pending"}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <TableAcions id={todo.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
