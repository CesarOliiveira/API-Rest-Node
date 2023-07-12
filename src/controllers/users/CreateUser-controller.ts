import {FastifyRequest, FastifyReply} from 'fastify';
import { CreateUserUseCase } from './CreateUserCase';
import { z } from 'zod';
import { prisma } from '../../database/prismaClient';
import { AppError } from '../../errors/AppError';


export class CreateUserController {
    async handle(req: FastifyRequest, rep: FastifyReply){

        const user = z.object({
            username: z.string(),
            email: z.string(),
            password: z.string()
        })

        const {username, email, password} = user.parse(req.body);

        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if(userAlreadyExists){

            throw new AppError("User already exists")

        }

        const createUserUseCase = new CreateUserUseCase();
        const result = await createUserUseCase.execute({username, email, password});

        return rep.status(201).send(result);
        
    }
}