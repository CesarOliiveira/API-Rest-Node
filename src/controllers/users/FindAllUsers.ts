import {FastifyRequest, FastifyReply} from 'fastify';
import { prisma } from '../../database/prismaClient';


export class FindAllUsers {
    async handle(req: FastifyRequest, rep: FastifyReply){
        
        const Users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return rep.status(200).send(Users);
        
    }
}