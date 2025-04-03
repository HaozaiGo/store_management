import prisma from './client'

// 软删除中间件
prisma.$use(async (params, next) => {
  if (params.action === 'delete') {
    params.action = 'update'
    params.args.data = { deletedAt: new Date() }
  }
  if (params.action === 'deleteMany') {
    params.action = 'updateMany'
    params.args.data = { deletedAt: new Date() }
  }
  return next(params)
})

// 查询过滤已删除记录
prisma.$use(async (params, next) => {
  if (params.model && ['find', 'findMany'].includes(params.action)) {
    params.args.where = {
      ...params.args.where,
      deletedAt: null
    }
  }
  return next(params)
})