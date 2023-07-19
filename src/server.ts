import fastify from "fastify";
import { userRoutes } from "./routes/routes";



const app = fastify();

app.register(userRoutes, {
    prefix: 'users',
})

app.get("/", () => {
    return "Hello world"
})


app.listen({
    port: 3000,
})
.then(() => {
    console.log('HTTP Server Running');
});

