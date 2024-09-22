import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopComponent from "../../app/components/Top";

describe("NavTopComponent", () => {
    it("renders a navigation", () => {
        render(<TopComponent />);
        const navigation = screen.getByRole("navigation");
        expect(navigation).toBeInTheDocument();
    });

    it("renders imgs", () => {
        render(<TopComponent />);
        const imgs = screen.getAllByRole("img");
        for (let i = 0; i < imgs.length; i++) {
            expect(imgs[i]).toBeInTheDocument();
        }
    });

    it("renders a list", () => {
        render(<TopComponent />);
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
    });

    it("renders listitems", () => {
        render(<TopComponent />);
        const listItems = screen.getAllByRole("listitem");
        for (let i = 0; i < listItems.length; i++) {
            expect(listItems[i]).toBeInTheDocument();
        }
    });

    it("renders links", () => {
        render(<TopComponent />);
        const links = screen.getAllByRole("link");
        for (let i = 0; i < links.length; i++) {
            expect(links[i]).toBeInTheDocument();
        }
    });
})