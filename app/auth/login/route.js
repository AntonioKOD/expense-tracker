import {PrismaClient} from '@prisma/client'
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

export async function POST(req){
    try{
        const {email, password} = await req.json()

        const existingUser = await prisma.user.findUnique({
            where: {email}
        });
        if (!existingUser) {
            return new Response(JSON.stringify({ error: 'User not found' }), {
              status: 404,
            });
          }

          return new Response(JSON.stringify({ message: 'Login successful', user: existingUser }), {
            status: 200,
          });
    }catch(err){
        return new Response(JSON.stringify({error: 'Signup failed'}), {
            status: 500
        })
        

    }
}