import { FastifyPluginAsync, FastifyRegister } from "fastify";

export const socketRoute: FastifyPluginAsync = async (server) => {
  server.get("/socket", { websocket: true }, (connection, req) => {
    try {
      const id = server.connection.setConnection(connection);
      console.log(
        `connection established: ${id}, now we have ${server.connection.currentConns} connections`
      );
      connection.socket.on("open", () => {
        console.log("open");
      });
      connection.socket.on("message", (message) => {
        console.log("message");
        console.log(message);
      });
      connection.on("error", (err) => {
        console.error(err);
        server.connection.removeConnection(id);
      });
      connection.socket.on("close", (code, reason) => {
        console.log("close");
        console.log(code, reason);
        server.connection.removeConnection(id);
      });
      connection.socket.send("hello");
    } catch (e) {
      console.log(e);
    }
  });
};
