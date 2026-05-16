import dbConnect from "@/src/lib/dbConnect";
import UserModel from "@/src/model/User";
import {success, z} from "zod"; 
import { userNameValidation } from "@/src/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username: userNameValidation
})

export async function GET(request:Request) {
    await dbConnect()

    try {
        const {searchParams} = new URL(request.url)
        const queryParam = {
            username: searchParams.get("username")
        } 
        //Validate with Zod 
       const result =  UsernameQuerySchema.safeParse(queryParam)
       if(!result.success){
        const usernameErrors = result.error.format.
       }
    } catch (error) {
        console.error("Error checking username",error)
        return Response.json({
            success: false,
            message:"Error checking username"
        },{status:500})
    }
}