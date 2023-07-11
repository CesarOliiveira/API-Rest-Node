import { User } from '@prisma/client';
import { prisma } from '../../database/prismaClient';
import { FastifyReply } from 'fastify';

export class FindAllUsers {
    async handle(rep: FastifyReply): Promise<User>{
        
        const Users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                password: false
            }
        })

        return rep.status(201).send(Users);
    }
}