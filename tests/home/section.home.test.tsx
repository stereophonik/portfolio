import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeComponent from "../../app/components/Home";

describe("SectionHomeComponent", () => {
    it("renders an img", () => {
        render(<HomeComponent />);
        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
    });
})