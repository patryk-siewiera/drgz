const PrismaClient = require("@prisma/client").PrismaClient;

const express = require("express");
const app = express();
const port = 3001;

const prisma = new PrismaClient();
const frontend = "http://localhost:3000";

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Origin", frontend);
  next();
});

app.get("/order", async (req, res) => {
  const orders = await prisma.orders.findMany();
  // console.info("orders", orders);
  console.log("\n----- GET -----");
  console.info("200 OK: GET: /order");
  res.send(orders);
});

app.post("/order", express.json(), async (req, res) => {
  console.log("\n----- POST ----- ID:", req.body.id);
  console.log(req.body);
  const order = req.body;
  await prisma.orders.create({ data: order });
  res.send("Succesfully added entry");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
