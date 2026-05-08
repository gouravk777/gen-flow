import VerificationEmail from "@/emails/verificationEmail";
import { resend } from "../lib/resend";
import { ApiResponse } from "../types/ApiResponse";
import { string } from "zod";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string ):Promise<ApiResponse>
    {
    try {

        await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Flow Intelligence | Verification Code',
        react: VerificationEmail({
             username, otp:verifyCode

        })
    });
        return{
            success: true,
            message: "verification email send succesfuly"
        }
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return{
            success: false,
            message: "failed to send verification email"
        }
        
    }
}