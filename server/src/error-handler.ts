import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { BadRequest } from "./routes/_erros/bad-request";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message:
        "Please check and make sure you fill in the name field correctly.",
      error: error.flatten().fieldErrors,
      statusCode: 400,
    });
  }

  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }

  return reply.status(500).send({ message: "Internal server error!" });
};
