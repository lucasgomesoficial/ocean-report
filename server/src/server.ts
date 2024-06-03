import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";
import { VALUES_UF } from "./utils/valuesUf";

const app = fastify();

app.register(cors, {
  origin: "*",
});

const prisma = new PrismaClient();

app.get("/reports", async () => {
  const reports = await prisma.uf.findMany();

  return { reports };
});

app.post("/send/reports", async (req, reply) => {
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
});

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
