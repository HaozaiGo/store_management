// /lib/prisma/seed.ts
import prisma from "./client"
import bcrypt from "bcryptjs"

async function main() {
  // 清空现有数据
  await prisma.user.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  // 创建管理员
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin",
      password: await bcrypt.hash("admin123", 12),
      role: "ADMIN"
    }
  })

  // 创建分类
  const electronics = await prisma.category.create({
    data: { name: "电子产品", slug: "electronics" }
  })

  // 创建示例商品
  await prisma.product.create({
    data: {
      name: "智能手机",
      description: "高端智能手机",
      price: 5999.00,
      stock: 100,
      categoryId: electronics.id,
      images: ["/uploads/phone1.jpg"]
    }
  })

  console.log("✅ 数据库种子数据已植入")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })