"use client"
import { Trash } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';
import { Spinner } from '@/utils/Spinder';
import { deleteTodosAction } from '../../server/actions/todo-action';

export default function TableAcions({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="flex justify-end gap-2">
            <Button
                variant="outline"
                size="icon"
            >
                <Pencil className="h-4 w-4" />
            </Button>
            <Button
                variant="destructive"
                size="icon"
                onClick={() => {
                    setIsLoading(true);
                    deleteTodosAction({ id })
                        .finally(() => setIsLoading(false));
                }}
            >
                {isLoading ? (
                    <Spinner isLoading={isLoading} children={<Trash className="h-4 w-4" />} />
                ) : (
                    <Trash className="h-4 w-4" />
                )}
            </Button>
        </div>
    )
}
