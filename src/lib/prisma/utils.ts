// /lib/prisma/utils.ts
import prisma from "./client"

// 分页查询
export async function paginate<T>(
  model: keyof typeof prisma,
  options: {
    page?: number
    limit?: number
    where?: any
    include?: any
    orderBy?: any
  } = {}
) {
  const page = options.page || 1
  const limit = options.limit || 10
  const skip = (page - 1) * limit

  const [total, items] = await Promise.all([
    prisma[model].count({ where: options.where }),
    prisma[model].findMany({
      skip,
      take: limit,
      where: options.where,
      include: options.include,
      orderBy: options.orderBy
    })
  ])

  return {
    data: items as T[],
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1
    }
  }
}

// 软删除扩展
export function softDeleteMiddleware() {
  prisma.$use(async (params, next) => {
    if (params.action === 'delete') {
      params.action = 'update'
      params.args.data = { deletedAt: new Date() }
    }
    if (params.action === 'deleteMany') {
      params.action = 'updateMany'
      if (params.args.data !== undefined) {
        params.args.data.deletedAt = new Date()
      } else {
        params.args.data = { deletedAt: new Date() }
      }
    }
    return next(params)
  })
}

// 连接数据库
export async function connectDB() {
  try {
    await prisma.$connect()
    console.log("✅ 数据库连接成功")
  } catch (error) {
    console.error("❌ 数据库连接失败", error)
    process.exit(1)
  }
}