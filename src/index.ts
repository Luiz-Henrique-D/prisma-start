import express from "express";
import router from "./routes/router";
import { join } from "path";

function main() {
	const app = express();

	app.use(express.json());
	app.use(express.static(join(__dirname, "public")));
	app.use(router);
	app.listen(3000, () => {
		console.log("Listening on port 3000!");
	});
}

main();
