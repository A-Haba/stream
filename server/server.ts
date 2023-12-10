import { fastify } from "fastify";
import websocket from "@fastify/websocket";
import fatifyCors from "@fastify/cors";
import { socketRoute } from "./routes/socket";
import { Connection } from "./connection";
import { ApiRoute } from "./routes/api";

export const createServer = () => {
  const server = fastify();
  server.register(fatifyCors, {
    origin: ["*"],
  });
  server.register(websocket, {
    errorHandler: (err, conn) => {
      console.error(err);
      conn.destroy(err);
    },
  });
  server.decorate("connection", new Connection());

  server.register(socketRoute);

  server.register(ApiRoute);

  server.addHook("onClose", async () => {
    server.connection.closeAll();
  });

  return server;
};
