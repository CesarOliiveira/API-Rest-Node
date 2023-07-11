
import { FastifyInstance, FastifyReply } from "fastify";
import { CreateUserController } from "../controllers/users/CreateUser-controller";
import { FindAllUsers } from "../controllers/users/FindAllUsers";



export async function userRoutes(app: FastifyInstance) {
    const createUserUseController = new CreateUserController();
    const findAllUsers = new FindAllUsers(); 

    
    app.get("/", findAllUsers.handle)
    app.post("/", createUserUseController.handle)
    
}
