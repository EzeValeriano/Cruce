const http = require("http");
const { Server } = require("socket.io");
const { Order } = require("./models");

const socketLoader = (app) => {
  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  //   const orders = [];

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });

    socket.on("change-orders", async () => {
      const newOrders = await Order.find({ actualState: "Sin Asignar" });
      io.emit("new-orders", newOrders);
    });

    socket.on("get-orders", async (state) => {
      const o = await Order.find(state ? { actualState: state } : {});
      // setTimeout(() => {
      socket.emit("new-orders", o);
      // }, 1000);
    });

    // Order.find().then((orders) => {
    //   console.log("PEDIDOS", orders);
    //   socket.emit("new-orders", orders);
    // });
  });

  return server;
};

module.exports = socketLoader;
