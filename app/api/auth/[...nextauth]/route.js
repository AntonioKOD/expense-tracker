import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "name@example.com"},
                password: {label: 'Password', type: 'password'},

            },
            async authorize(credentials){
                const user = await prisma.user.findUnique({
                    where: {email: credentials.email},
                })
                if(!user){
                    throw new Error("No user found with this email")
                }

                const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

                if(!isPasswordValid){
                    throw new Error("Password is incorrect")
                }
                return user;
            }

        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt",

    }, 
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.id = user.id;
            }
            return token;
        },
        async session({session, token}){
            session.user.id = token.id;
            return session;
        }
    }
})

export {handler as GET, handler as POST};

