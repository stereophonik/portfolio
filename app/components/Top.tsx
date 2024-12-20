import { useContext } from "react";
import { TopContext } from "../contexts/Top";

export default function TopComponent(): React.ReactElement {
    const topContext: {} = useContext(TopContext);

    return (
        <nav
            id={topContext["nav"]["id"]}
            className={topContext["nav"]["className"]}>
            <a
                href={topContext["a"]["href"]}
                target={topContext["a"]["target"]}>
                <img
                    id={topContext["img"]["id"]}
                    className={topContext["img"]["className"]}
                    src={topContext["img"]["src"]}
                    alt={topContext["img"]["alt"]}
                />
            </a>
            <ul
                id={topContext["ul"]["id"]}
                className={topContext["ul"]["className"]}>
                <li
                    className={topContext["lis"][0]["className"]}
                    key={topContext["lis"][0]["key"]}>
                    <a
                        href={topContext["as"][0]["href"]}
                        target={topContext["as"][0]["target"]}>
                        {topContext["as"][0]["content"]}
                    </a>
                </li>
                <li
                    className={topContext["lis"][1]["className"]}
                    key={topContext["lis"][1]["key"]}>
                    <a
                        href={topContext["as"][1]["href"]}
                        target={topContext["as"][1]["target"]}>
                        {topContext["as"][1]["content"]}
                    </a>
                </li>
                <li
                    className={topContext["lis"][2]["className"]}
                    key={topContext["lis"][2]["key"]}>
                    <a
                        href={topContext["as"][2]["href"]}
                        target={topContext["as"][2]["target"]}>
                        {topContext["as"][2]["content"]}
                    </a>
                </li>
                <li
                    className={topContext["lis"][3]["className"]}
                    key={topContext["lis"][3]["key"]}>
                    <a
                        href={topContext["as"][3]["href"]}
                        target={topContext["as"][3]["target"]}>
                        {topContext["as"][3]["content"]}
                    </a>
                </li>
                <li
                    className={topContext["lis"][4]["className"]}
                    key={topContext["lis"][4]["key"]}>
                    <a
                        href={topContext["as"][4]["href"]}
                        target={topContext["as"][4]["target"]}>
                        {topContext["as"][4]["content"]}
                    </a>
                </li>
            </ul>
        </nav>
    );
}