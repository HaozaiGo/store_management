import { User, Product, Category } from '@prisma/client'

// 带关联关系的商品类型
export type ProductWithRelations = Product & {
  category: Category
  reviews: Review[]
}

// 带角色的用户类型
export type UserWithRole = User & {
  role: 'ADMIN' | 'EDITOR' | 'VIEWER'
}

// 分页返回类型
export type PaginatedResult<T> = {
  data: T[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}