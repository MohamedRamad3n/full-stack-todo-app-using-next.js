import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: Array.from({ length: 10 }, () => ({
            name: faker.internet.username(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }))
    })
    await prisma.todo.createMany({
        data: Array.from({ length: 10 }, () => ({
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
        }))
    })
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })