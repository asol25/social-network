import { io } from "socket.io-client";

const URL = "http://localhost:3333/";
const socket = io(URL, { autoConnect: true });

export default socket;