"use server";

import prisma from "@/lib/prisma/client";
import { ProductSchema } from "@/lib/validations/product";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export async function getProducts() {
  const session = await auth();
  if (!session) throw new Error("未授权");

  return await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createProduct(data: FormData) {
  const session = await auth();
  if (!session) throw new Error("未授权");

  const values = Object.fromEntries(data.entries());
  const validatedData = ProductSchema.parse(values);

  await prisma.product.create({
    data: {
      ...validatedData,
      price: parseFloat(validatedData.price.toString()),
      stock: parseInt(validatedData.stock.toString()),
      categoryId: validatedData.categoryId,
    },
  });

  revalidatePath("/products");
}

export async function updateProduct(id: string, data: FormData) {
  const session = await auth();
  if (!session) throw new Error("未授权");

  const values = Object.fromEntries(data.entries());
  const validatedData = ProductSchema.parse(values);

  await prisma.product.update({
    where: { id },
    data: {
      ...validatedData,
      price: parseFloat(validatedData.price.toString()),
      stock: parseInt(validatedData.stock.toString()),
      categoryId: validatedData.categoryId,
    },
  });

  revalidatePath("/products");
}

export async function deleteProduct(id: string) {
  const session = await auth();
  if (!session) throw new Error("未授权");

  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/products");
}
