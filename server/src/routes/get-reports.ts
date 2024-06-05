import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getReports(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/reports",
    {
      schema: {
        summary: "Get an reports",
        description: "endpoint responsible for bringing report rates by state",
        tags: ["reports"],
        response: {
          200: z.object({
            reports: z.array(
              z.object({
                id: z.string().cuid(),
                name: z.string(),
                reports: z.number(),
                createdAt: z.date(),
              })
            ),
          }),
        },
      },
    },
    async (req, reply) => {
      const reports = await prisma.uf.findMany();

      return reply.send({ reports });
    }
  );
}
