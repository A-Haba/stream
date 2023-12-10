import { SocketStream } from "@fastify/websocket";
import { v4 } from "uuid";

export class Connection {
  _connections: {
    [id: string]: SocketStream;
  } = {};

  constructor() {}

  setConnection(connection: SocketStream): string {
    const id = v4();
    this._connections[id] = connection;

    return id;
  }

  get conns() {
    return this._connections;
  }

  get currentConns(): number {
    return Object.keys(this._connections).length;
  }

  sendMessageObject(msg: Record<string, unknown>) {
    Object.values(this._connections).forEach((conn) => {
      conn.socket.send(JSON.stringify(msg));
    });
  }

  removeConnection(id: string) {
    this._connections[id].socket.close();
    delete this._connections[id];
  }

  closeAll() {
    Object.values(this._connections).forEach((conn) => {
      conn.socket.close();
    });
    this._connections = {};
  }
}
