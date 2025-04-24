'use server'
import { TodoFormValues } from '@/components/AddTodoForm'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function getTodosAction() {
    return await prisma.todo.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export async function createTodosAction({ data }: { data: TodoFormValues }) {
    const todo = await prisma.todo.create({
        data: {
            title: data.title,
            description: data.description,
            completed: data.completed
        }
    })
    revalidatePath('/')
    return todo
}

export async function updateTodosAction({ id, data }: { id: string; data: TodoFormValues }) {
    try {
        const todo = await prisma.todo.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                completed: data.completed
            }
        });
        revalidatePath('/');
        return todo;
    } catch (error: any) {
        if (error?.code === 'P2025') {
            throw new Error('Todo not found');
        }
        throw error;
    }
}

export async function deleteTodosAction({ id }: { id: string }) {
    try {
        await prisma.todo.delete({
            where: { id }
        })
        revalidatePath('/')
        return { success: true }
    } catch (error: any) {
        if (error?.code === 'P2025') {
            return { success: false, error: 'Todo not found' }
        }
        throw error
    }
}