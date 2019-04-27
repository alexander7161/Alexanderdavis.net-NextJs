import { Client } from "basic-ftp";
import path from "path";
const { HOST, USER, PASSWORD, HOST_PATH } = process.env;

console.log(HOST_PATH);

example();

async function example() {
	const client = new Client();
	client.ftp.verbose = true;
	try {
		await client.access({
			host: HOST,
			user: USER,
			password: PASSWORD
		});
		console.log(await client.list());
		await client.cd(HOST_PATH!);
		await client.uploadDir(path.join(__dirname, "../..", "build"), "website");
	} catch (err) {
		console.log(err);
	}
	client.close();
}
