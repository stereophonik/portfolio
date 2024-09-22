import { useContext } from "react";
import { BottomContext } from "../../contexts/Bottom";

export default function FooterBottomComponent(): React.ReactElement {
    const bottomContext: {} = useContext(BottomContext);

    return (
        <footer
            id={bottomContext["footer"]["id"]}
            className={bottomContext["footer"]["className"]}>
            <div
                id={bottomContext["divs"][1]["id"]}
                className={bottomContext["divs"][1]["className"]}>
                <a
                    href={bottomContext["a"]["href"]}
                    target={bottomContext["a"]["target"]}>
                    {bottomContext["a"]["content"]}
                </a>
            </div>
            <img
                id={bottomContext["img"]["id"]}
                className={bottomContext["img"]["className"]}
                src={bottomContext["img"]["src"]}
                alt={bottomContext["img"]["alt"]}
            />
            <ul
                id={bottomContext["ul"]["id"]}
                className={bottomContext["ul"]["className"]}>
                <li
                    className={bottomContext["lis"][0]["className"]}
                    key={bottomContext["lis"][0]["key"]}>
                    <a
                        href={bottomContext["as"][0]["href"]}
                        target={bottomContext["as"][0]["target"]}>
                        <img
                            id={bottomContext["imgs"][0]["id"]}
                            className={bottomContext["imgs"][0]["className"]}
                            src={bottomContext["imgs"][0]["src"]}
                            alt={bottomContext["imgs"][0]["alt"]}/>
                    </a>
                </li>
                <li
                    className={bottomContext["lis"][1]["className"]}
                    key={bottomContext["lis"][1]["key"]}>
                    <a
                        href={bottomContext["as"][1]["href"]}
                        target={bottomContext["as"][1]["target"]}>
                        <img
                            id={bottomContext["imgs"][1]["id"]}
                            className={bottomContext["imgs"][1]["className"]}
                            src={bottomContext["imgs"][1]["src"]}
                            alt={bottomContext["imgs"][1]["alt"]}/>
                    </a>
                </li>
            </ul>
            <div
                id={bottomContext["divs"][0]["id"]}
                className={bottomContext["divs"][0]["className"]}>
                {bottomContext["divs"][0]["content"]}
            </div>
        </footer>
    );
}