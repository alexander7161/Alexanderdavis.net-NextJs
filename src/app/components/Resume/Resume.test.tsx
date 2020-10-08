import React from "react";
import { render } from "../../test-utils";
import Resume from ".";

describe("Resume", () => {
	test("snapshot", () => {
		const { asFragment } = render(<Resume />);
		expect(asFragment()).toMatchSnapshot();
	});
});
