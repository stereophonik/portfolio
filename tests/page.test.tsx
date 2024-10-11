import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("PageComponent", () => {
    it("renders a navigation", () => {
        render(<Page />);
        const navigation = screen.getByRole("navigation");
        expect(navigation).toBeInTheDocument();
    });
})