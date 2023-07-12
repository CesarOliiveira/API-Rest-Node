
import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/users/CreateUser-controller";
import { FindUsers } from "../controllers/users/FindUsers";



export async function userRoutes(app: FastifyInstance) {
    const createUserUseController = new CreateUserController();
    const findUsers = new FindUsers(); 

    
    app.get("/", findUsers.find)
    app.get("/:id", findUsers.findByID)

    app.post("/", createUserUseController.handle)
    
}
