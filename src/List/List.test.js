import {render} from "@testing-library/react";
import React from "react";
import List from ".";

test("renders list", () => {
    const {getByText} = render(<List />);
    const linkElement = getByText(/TODO List here/i);
    expect(linkElement).toBeInTheDocument();
});
