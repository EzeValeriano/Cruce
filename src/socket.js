import io from "socket.io-client";

export let socket = null;

export const connect = () => {
  socket = io("http://localhost:3001");
};

// class Socket {
//   socket;

//   connect() {
//     this.socket = io.connect("http://localhost:3001");
//   }

//   getOrders() {
//     socket.emit("get-orders");
//   }

//   onNewOrders (){

//   }

// }

// export default new Socket();
