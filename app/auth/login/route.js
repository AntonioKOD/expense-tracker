import {PrismaClient} from '@prisma/client'
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

export async function POST(req){
    try{
        const {name, email, password} = await req.json()

        const existingUser = await prisma.user.findUnique({
            where: {email}
        });
        if(existingUser){
            return new Response(JSON.stringify({error: 'User already exists'}), {
                status: 400
            })
        }
    }catch(err){
        return new Response(JSON.stringify({error: 'Signup failed'}), {
            status: 500
        })

    }
}