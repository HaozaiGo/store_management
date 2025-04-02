import { ProductList } from "@/components/products/product-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getProducts } from "@/actions/product"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function ProductsPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/auth/login")
  }

  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">商品管理</h1>
        <Button asChild>
          <Link href="/products/new">添加商品</Link>
        </Button>
      </div>
      <ProductList products={products} />
    </div>
  )
}