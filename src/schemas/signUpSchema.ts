import {z} from 'zod'

export const userNameValidation = z.string()
.min(2,"Username must be atleast 2 characters ")
.max(20,"User name must not be more than 20 characters ")
.regex(/^[a-zA-Z0-9]+$/,'Username must not contain special character')

export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.email({message:'Invalid email address'}),
    password: z.string().min(6,{message:"password must be at least 6 characters"})
})