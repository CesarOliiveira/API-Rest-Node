import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { prisma } from '../../database/prismaClient';
import { User } from '@prisma/client';

export class CreateUserUseCase {
    async execute({name, email, password}: CreateUserDTO): Promise<User>{
        
        const User = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })

        return User;

    }
}