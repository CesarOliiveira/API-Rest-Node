import {FastifyRequest, FastifyReply} from 'fastify';
import { prisma } from '../../database/prismaClient';
import { z } from 'zod';
import { AppError } from '../../errors/AppError';

export class FindUsers {
    //Return All Users
    async find(req: FastifyRequest, rep: FastifyReply){

        const Users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                created_at: true,
            }
        })

        return rep.status(200).send(Users);
        
    }



    // Find User by ID

    async findByID(req: FastifyRequest, rep: FastifyReply){

        const user = z.object({
            id: z.string()
        })

        const {id} = user.parse(req.params);

        const Users = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                email: true,
                created_at: true,
            }
        })

        if (!Users) {
            throw new AppError("User not found", 404);
        } 

        return rep.status(200).send(Users)
        
        
    }
}