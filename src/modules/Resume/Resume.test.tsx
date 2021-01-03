import React from "react";
import { render } from "../../test-utils";
import Resume from "../Resume";

describe("Resume", () => {
	test("snapshot", () => {
		Date.prototype.toLocaleDateString = function () {
			return "mockDate";
		};
		const { asFragment } = render(<Resume />);
		expect(asFragment()).toMatchSnapshot();
	});
});
