import { Client } from "basic-ftp";
import path from "path";

deploy();

async function deploy() {
    const client = new Client();
    client.ftp.verbose = true;
    try {
        const { HOST, FTP_USER, PASSWORD, HOST_PATH } = process.env;
        await client.access({
            host: HOST,
            user: FTP_USER,
            password: PASSWORD,
        });
        await client.cd(HOST_PATH!);
        await client.uploadDir(path.join(__dirname, "../..", "build"), "website");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    client.close();
}
