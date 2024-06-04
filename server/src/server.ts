import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastify from "fastify";
import { getReports, saveReport } from "./routes/reports";

const app = fastify({ logger: true });

app.register(cors, {
  origin: "*",
});

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Ocean Watch",
      description:
        "API specifications for the Ocean Watch application backend.",
      version: "1.0.0",
    },
  },
});

app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.register(getReports);
app.register(saveReport);

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
