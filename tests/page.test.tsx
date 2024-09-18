import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavTopComponent from "../app/components/top/Nav";

describe("Page", () => {
    it("renders a nav", () => {
        render(<NavTopComponent />);
        const heading = screen.getByRole("paragraph", { name: "" });
        expect(heading).toBeInTheDocument();
    })
})