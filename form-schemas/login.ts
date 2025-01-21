import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      message: generateMessageRequired("Email"),
    })
    .email({
      message: "Email tidak valid",
    }),
  password: z.string({
    message: generateMessageRequired("Password"),
  }),
});

function generateMessageRequired(field: string) {
    return `${field} tidak boleh kosong`;
}