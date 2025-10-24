const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 1299.99,
        stock: 10
      },
      {
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 799.99,
        stock: 15
      },
      {
        name: 'Headphones',
        description: 'Wireless noise-canceling headphones',
        price: 199.99,
        stock: 20
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })