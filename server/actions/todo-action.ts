'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getTodosAction() {
    return await prisma.todo.findMany()
}
export async function createTodosAction() {

}
export async function updateTodosAction() {

}
export async function deleteTodosAction() {

}