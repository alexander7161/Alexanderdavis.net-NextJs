import { getLastUpdatedString } from "../getLastUpdated";

it("getLastUpdatedString 1 day", () => {
	expect(getLastUpdatedString(1, "day")).toEqual("1 day ago");
});

it("getLastUpdatedString 2 days", () => {
	expect(getLastUpdatedString(2, "day")).toEqual("2 days ago");
});

it("getLastUpdatedString 1 month", () => {
	expect(getLastUpdatedString(1, "month")).toEqual("1 month ago");
});
