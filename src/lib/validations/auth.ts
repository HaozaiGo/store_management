// @/lib/validations/auth.ts
import { z } from "zod";

// 登录表单验证
export const loginSchema = z.object({
  email: z.string()
    .min(1, "邮箱不能为空")
    .email("请输入有效的邮箱地址"),
  password: z.string()
    .min(6, "密码至少6位字符")
    .max(32, "密码最多32位字符")
});
export type LoginFormValues = z.infer<typeof loginSchema>;

// 注册表单验证
export const registerSchema = z.object({
  name: z.string()
    .min(2, "姓名至少2位字符")
    .max(20, "姓名最多20位字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string()
    .min(6, "密码至少6位字符")
    .max(32, "密码最多32位字符")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      "密码必须包含大小写字母和数字"
    ),
  confirmPassword: z.string()
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "两次密码输入不一致",
    path: ["confirmPassword"] // 错误显示在confirmPassword字段
  }
);
export type RegisterFormValues = z.infer<typeof registerSchema>;

// 密码重置验证
export const resetPasswordSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址")
});
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

// 验证码验证（短信/邮件）
export const otpSchema = z.object({
  code: z.string()
    .length(6, "验证码必须为6位数字")
    .regex(/^\d+$/, "验证码只能包含数字")
});