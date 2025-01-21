import {z} from "zod";

export const registerSchema = z.object({
    firstName: z.string().min(3, {
        message: generateMinMessage(3, "Nama depan")
    }),
    lastName: z.string().min(3, {
        message: generateMinMessage(3, "Nama belakang")
    }),
    email: z.string().email({
        message: "Email tidak valid"
    }),
    password: z.string().min(8, {
        message: generateMinMessage(8, "Password")
    }),
})

function generateMinMessage(min: number, field: string) {
    return `${field} tidak boleh kurang dari ${min} karakter`;
}