import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../database/prismaClient";
import { z } from "zod";
import { PasswordCrypto } from '../../services';


export class usernameLogin {
    async login(req: FastifyRequest, rep: FastifyReply){

        const infoUser = z.object({
            email: z.string(),
            password: z.string()
        })

        const {email, password} = infoUser.parse(req.body)

        

        const resultUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
            select: {
                id: true,
                email: true,
                password: true,
            }
        })

    
        const resultPassword = await PasswordCrypto.verifyPassword(password, resultUser?.password as string) 

        
         if (resultPassword) {
             return rep.status(200).send({
                 code: 1,
                 id: resultUser?.id,
                 message: "User Exists",
             })
         }else {
             return rep.status(404).send({
                 code: 0,
                 message: "User NOT Found",
             })
         }
    }
}