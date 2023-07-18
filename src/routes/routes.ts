
import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/users/CreateUser-controller";
import { FindUsers } from "../controllers/users/FindUsers";
import { usernameLogin } from "../controllers/users/usernameLogin";




export async function userRoutes(app: FastifyInstance) {
    const createUserUseController = new CreateUserController();
    const findUsers = new FindUsers();
    const loginUsername = new usernameLogin();

    
    app.get("/", findUsers.find)
    app.get("/:id", findUsers.findByID)
    
    app.post("/login", loginUsername.login)
    app.post("/", createUserUseController.handle)
    
}
