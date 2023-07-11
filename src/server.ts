import fastify, {FastifyRequest, FastifyReply} from "fastify";
import { userRoutes } from "./routes/routes";

const app = fastify();

app.register(userRoutes, {
    prefix: 'users',
})


app.listen({
    port: 3000,
})
.then(() => {
    console.log('HTTP Server Running');
});

export {app}