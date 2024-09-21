import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SectionHomeComponent from "../../app/components/home/Section";

describe("SectionHomeComponent", () => {
    it("renders an img", () => {
        render(<SectionHomeComponent />);
        const img = screen.getByRole("img");
        expect(img).toBeInTheDocument();
    });
})