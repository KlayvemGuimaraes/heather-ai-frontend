import { createContext } from 'react';
import io from 'socket.io-client';
import { SOCKET_SERVER_URL } from "../config/socket";

export const socket = io(SOCKET_SERVER_URL);
export const SocketContext = createContext(socket);
