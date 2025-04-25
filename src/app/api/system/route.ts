import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body, "body");

    // 根据你的 Prisma 模型调整下面的创建逻辑
    const newData = await prisma.user.findUnique({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    console.log(newData, "newData");
    if (!newData) {
      return NextResponse.json(
        { error: "User not found,账号密码错误！" },
        { status: 500 }
      );
    }
    return NextResponse.json('登录成功', { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}
