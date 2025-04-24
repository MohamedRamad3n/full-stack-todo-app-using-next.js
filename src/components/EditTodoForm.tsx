'use client';
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateTodosAction } from "../../server/actions/todo-action";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useState } from "react";
import { TodoFormSchema } from "./AddTodoForm";
import { ITodo } from "../../types";


export type TodoFormValues = z.infer<typeof TodoFormSchema>

export default function EditTodoForm({ todo }: { todo: ITodo }) {
    const [open, setOpen] = useState(false);
    const form = useForm<TodoFormValues>({
        resolver: zodResolver(TodoFormSchema),
        defaultValues: {
            title: todo.title,
            description: todo.description || "",
            completed: todo.completed,
        },
        mode: "onChange",
    })

    const onSubmit = async (data: TodoFormValues) => {
        try {
            const updatedTodo = await updateTodosAction({ id: todo.id, data });
            form.reset({
                title: updatedTodo.title,
                description: updatedTodo.description || "",
                completed: updatedTodo.completed,
            });
            setOpen(false);
            toast.success("Todo updated successfully!");
        } catch (error) {
            toast.error("Failed to update todo");
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                    <DialogDescription>
                        Edit your todo item here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter todo title" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Give your todo a descriptive title
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter todo description"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Add details about your todo
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="completed"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center gap-2">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        </FormControl>
                                        <FormLabel>Completed</FormLabel>
                                    </div>
                                    <FormDescription>
                                        Mark your todo as completed
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Save Todo</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
} 