import { FastifyPluginAsync } from "fastify";

export const ApiRoute: FastifyPluginAsync = async (server) => {
  server.post<{
    Body: {
      [key: string]: unknown;
    };
  }>("/param", (req, res) => {
    const message = {
      type: "setParam",
      payload: req.body,
    };
    server.connection.sendMessageObject(message);
    res.send({ status: "ok" });
  });

  server.post<{
    Body: {
      type: string;
      payload?: {
        [key: string]: unknown;
      };
    };
  }>("/event", (req, res) => {
    const message = {
      type: "pushEvent",
      payload: req.body,
    };
    server.connection.sendMessageObject(message);
    res.send({ status: "ok" });
  });
};
