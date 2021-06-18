const PrismaClient = require("@prisma/client").PrismaClient;

const express = require("express");
const app = express();
const port = 3001;

const prisma = new PrismaClient();
const frontend = "http://192.168.56.1:3000";

app.use((req, res, next) => {
	res.set("Access-Control-Allow-Headers", "*");
	res.set("Access-Control-Allow-Methods", "*");
	res.set("Access-Control-Allow-Origin", frontend);
	next();
});

app.get("/order", async (req, res) => {
	const orders = await prisma.orders.findMany();
	let date = new Date();
	console.log("\n----- GET -------", date.toISOString());
	console.info("200 OK: GET: /order");
	res.send(orders);
});

app.post("/order", express.json(), async (req, res) => {
	let date = new Date();
	``;
	console.log("\n----- POST -----", date.toISOString());
	console.log(req.body);
	const order = req.body;
	await prisma.orders.create({ data: order });
	res.send("Succesfully added entry\n");
});

app.delete("/order/:id", express.json(), async (req, res) => {
	/**
	 * delete is different to a PUT/POST request in such a way that it should not have body content
	 * thats why we should pass id in thje req.params. e.g. id
	 */
	let date = new Date();
	console.log("\n----- DELETE ----", date.toISOString());
	const order = req.body;
	console.log("id: ", req.params.id);
	await prisma.orders.delete({
		where: {
			id: parseInt(req.params.id),
		},
	});
	res.send({ info: "Deleted" });
});

app.listen(port, () =>
	console.log(`Hello world app listening on port ${port}!`)
);
