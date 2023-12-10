import { fastify } from "fastify";
import type { SocketStream } from "@fastify/websocket";
import { Connection } from "../../connection";

declare module "fastify" {
  export interface FastifyInstance {
    connection: Connection;
  }
}
