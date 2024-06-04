import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import z from "zod";
import { VALUES_UF } from "../utils/valuesUf";

export async function getReports(app: FastifyInstance) {
  app.addSchema({
    $id: "reportSchema",
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      reports: { type: "number" },
      createdAt: { type: "string" },
    },
  });

  app.get(
    "/reports",
    {
      schema: {
        summary: "Get an reports",
        description: "endpoint responsible for bringing report rates by state",
        tags: ["reports"],
        response: {
          200: {
            reports: { type: "array", items: { $ref: "reportSchema#" } },
          },
        },
      },
    },
    async (req, reply) => {
      const reports = await prisma.uf.findMany();

      return reply.send({ reports });
    }
  );
}

export async function saveReport(app: FastifyInstance) {
  app.post(
    "/send/report",
    {
      schema: {
        summary: "Save a report",
        description: "endpoint responsible for save report rates by state",
        tags: ["reports"],
        params: {
          name: { type: "string" },
        },
        response: {
          204: { type: "string" },
          400: { error: { type: "string" } },
        },
      },
    },
    async (req, reply) => {
      try {
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

          return reply.status(204).send("Update reports successfully");
        } else {
          await prisma.uf.create({
            data: {
              name,
              reports: 1,
            },
          });

          return reply.status(204).send("Created reports successfully");
        }
      } catch (error) {
        const errorJson = JSON.stringify(error);
        if (error instanceof z.ZodError) {
          return reply.status(400).send({ error: "Invalid name value" });
        } else {
          return reply.status(500).send(errorJson);
        }
      }
    }
  );
}
