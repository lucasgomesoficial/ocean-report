import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { VALUES_UF } from "../utils/valuesUf";

export async function saveReport(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/send/report",
    {
      schema: {
        summary: "Save a report",
        description: "endpoint responsible for save report rates by state",
        tags: ["reports"],
        body: z.object({
          name: z.enum(VALUES_UF),
        }),
        response: {
          204: z.object({
            message: z.string(),
            error: z.string(),
            statusCode: z.number(),
          }),
          400: z.object({
            message: z.string(),
            error: z.string(),
            statusCode: z.number(),
          }),
        },
      },
    },
    async (req, reply) => {
      const createReportSchema = z.object({
        name: z.enum(VALUES_UF),
      });

      const { name } = createReportSchema.parse(req.body);

      const hasRegister = await prisma.uf.findMany({
        where: { name },
      });

      if (hasRegister.length) {
        await prisma.uf.update({
          where: { id: hasRegister[0].id },
          data: { reports: hasRegister[0].reports + 1 },
        });

        return reply.status(204).send({
          message: "Update reports successfully",
          error: "",
          statusCode: 204,
        });
      } else {
        await prisma.uf.create({
          data: {
            name,
            reports: 1,
          },
        });

        return reply.status(204).send({
          message: "Created reports successfully",
          error: "",
          statusCode: 204,
        });
      }
    }
  );
}
