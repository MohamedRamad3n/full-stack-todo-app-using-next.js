'use server'
import { TodoFormValues } from '@/components/TodoForm'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getTodosAction() {
    return await prisma.todo.findMany()
}
export async function createTodosAction({ data }: { data: TodoFormValues }) {
    return await prisma.todo.create({
        data: {
            title: data.title,
            description: data.description,
            completed: data.completed
        }
    })

}
export async function updateTodosAction() {

}
export async function deleteTodosAction() {

}