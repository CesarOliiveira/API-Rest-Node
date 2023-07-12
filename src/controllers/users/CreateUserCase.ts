import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { prisma } from '../../database/prismaClient';
import { PasswordCrypto } from '../../services';

export class CreateUserUseCase {
    async execute({username, email, password}: CreateUserDTO): Promise<Object>{
        
        password = await PasswordCrypto.hashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password
            },
            select: {
                id: true,
                username: true,
                email: true,
                created_at: true
            }
        })

        return user;

    }
}