// /lib/validations/product.ts
import { z } from "zod"

// 商品图片验证（最多5张）
const productImageSchema = z.object({
  id: z.string().optional(),
  url: z.string().url("必须是有效的URL")
})

// 基础商品表单验证
export const ProductSchema = z.object({
  name: z.string()
    .min(2, "商品名称至少2个字符")
    .max(100, "商品名称最多100个字符"),
  description: z.string()
    .max(500, "商品描述最多500个字符")
    .optional(),
  price: z.number()
    .min(0.01, "价格必须大于0")
    .max(1000000, "价格不能超过1,000,000"),
  stock: z.number()
    .int("库存必须是整数")
    .min(0, "库存不能为负数")
    .max(100000, "库存不能超过100,000"),
  categoryId: z.string()
    .min(1, "必须选择分类"),
  images: z.array(productImageSchema)
    .min(1, "至少上传一张图片")
    .max(5, "最多上传5张图片")
})

// 商品变体验证（如颜色、尺寸等）
export const ProductVariantSchema = z.object({
  name: z.string().min(1, "变体名称不能为空"),
  options: z.array(
    z.object({
      value: z.string().min(1, "选项值不能为空"),
      priceAdjustment: z.number().default(0),
      stock: z.number().int().min(0).default(0)
    })
  ).min(1, "至少需要一个选项")
})

// 商品搜索验证
export const ProductSearchSchema = z.object({
  query: z.string().optional(),
  categoryId: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  inStock: z.boolean().optional(),
  sortBy: z.enum(["price-asc", "price-desc", "newest", "bestselling"]).optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10)
})

// 商品批量操作验证
export const BulkProductOperationSchema = z.object({
  productIds: z.array(z.string().uuid()).min(1),
  operation: z.enum(["publish", "unpublish", "delete", "changeCategory"]),
  categoryId: z.string().uuid().optional()
})

// 导出类型定义
export type ProductFormValues = z.infer<typeof ProductSchema>
export type ProductVariantValues = z.infer<typeof ProductVariantSchema>
export type ProductSearchValues = z.infer<typeof ProductSearchSchema>
export type BulkProductOperationValues = z.infer<typeof BulkProductOperationSchema>