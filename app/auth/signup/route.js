import { PrismaClient} from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req){
    try{
        const {name, email, password} = await req.json();
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        return new Response(JSON.stringify(newUser), {status: 200})
    }catch(err){
        return new Response(JSON.stringify({error: 'Signup failed'}), {
            status: 500
        })
    }
}

