// /lib/prisma/client.ts
import { PrismaClient } from "@prisma/client"

declare global {
  // 避免热重载重复创建实例
  var prisma: PrismaClient | undefined
}

// 开发环境下复用现有实例，生产环境新建
const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === "development" 
    ? ["query", "error", "warn"] 
    : ["error"]
})

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}

export default prisma