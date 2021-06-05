const PrismaClient = require("@prisma/client").PrismaClient;

const express = require("express");
const app = express();
const port = 3001;

const prisma = new PrismaClient();

app.get("/order", async (req, res) => {
  const orders = await prisma.orders.findMany();
  console.info("orders", orders);
  res.send(orders);
});

app.post("/order", async (req, res) => {
  const order = JSON.parse(req.body);
  console.info("order", order);
  await prisma.orders.create({ data: order });
  res.send("");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
