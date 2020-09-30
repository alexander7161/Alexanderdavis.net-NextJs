import * as functions from "firebase-functions";
import admin = require("firebase-admin");
import { firestore } from "firebase-admin";

admin.initializeApp();

const getCollection = async (collection: string) => {
	const hackathonData = await firestore().collection(collection).get();
	return hackathonData.docs.map((d) => d.data());
};

export const hackathons = functions.https.onRequest(
	async (request, response) => {
		response.send(JSON.stringify(await getCollection("hackathons")));
	}
);

export const projects = functions.https.onRequest(async (request, response) => {
	response.send(JSON.stringify(await getCollection("projects")));
});
