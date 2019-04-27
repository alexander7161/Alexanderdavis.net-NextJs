import { Client } from "basic-ftp";
import path from "path";

example();

async function example() {
	const client = new Client();
	client.ftp.verbose = true;
	try {
		await client.access({
			host: process.env.HOST,
			user: process.env.USER,
			password: process.env.PASSWORD
		});
		console.log(await client.list());
		await client.cd(process.env.HOST_PATH!);
		await client.uploadDir(path.join(__dirname, "../..", "build"), "website");
	} catch (err) {
		console.log(err);
	}
	client.close();
}
