import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // TODO: Seed data here
}

main()
    .then(() => console.log('Data seeded'))
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
