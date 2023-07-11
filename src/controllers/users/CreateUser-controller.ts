import {FastifyRequest, FastifyReply} from 'fastify';
import { CreateUserUseCase } from './CreateUserCase';
import { z } from 'zod';
import { prisma } from '../../database/prismaClient';


export class CreateUserController {
    async handle(req: FastifyRequest, rep: FastifyReply){

        const user = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string()
        })

        const {name, email, password} = user.parse(req.body);

        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if(userAlreadyExists){

            return rep.status(401).send("User already exists")

        }else{

            const createUserUseCase = new CreateUserUseCase();
            const result = await createUserUseCase.execute({name, email, password});

            return rep.status(201).send(result);
        }
    }
}