"use client"
import { Trash } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Spinner } from '@/utils/Spinder';
import { deleteTodosAction } from '../../server/actions/todo-action';
import EditTodoForm from './EditTodoForm';
import { ITodo } from '../../types';
export default function TableAcions({ todo }: { todo: ITodo }) {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="flex justify-end gap-2">
            <EditTodoForm todo={todo} />
            <Button
                variant="destructive"
                size="icon"
                onClick={() => {
                    setIsLoading(true);
                    deleteTodosAction({ id: todo.id })
                        .finally(() => setIsLoading(false));
                }}
            >
                {isLoading ? (
                    <Spinner isLoading={isLoading}>
                        <Trash className="h-4 w-4" />
                    </Spinner>
                ) : (
                    <Trash className="h-4 w-4" />
                )}
            </Button>
        </div>
    )
}
