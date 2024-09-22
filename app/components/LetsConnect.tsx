import { useContext } from "react";
import { LetsConnectContext } from "../contexts/LetsConnect";

export default function LetsConnectComponent(): React.ReactElement {
    const letsConnectContext: {} = useContext(LetsConnectContext);

    return (
        <section
            id={letsConnectContext["section"]["id"]}
            className={letsConnectContext["section"]["className"]}>
            <h1
                id={letsConnectContext["h1"]["id"]}
                className={letsConnectContext["h1"]["className"]}>
                <span
                    id={letsConnectContext["aaSpan"]["id"]}
                    className={letsConnectContext["aaSpan"]["className"]}>
                    {letsConnectContext["aaSpan"]["content"]}
                </span>
                <span
                    id={letsConnectContext["abSpan"]["id"]}
                    className={letsConnectContext["abSpan"]["className"]}>
                    {letsConnectContext["abSpan"]["content"]}
                </span>
            </h1>
            <h2
                id={letsConnectContext["h2"]["id"]}
                className={letsConnectContext["h2"]["className"]}>
                <a href={letsConnectContext["a"]["href"]}
                   target={letsConnectContext["a"]["target"]}>
                    {letsConnectContext["a"]["content"]}
                </a>{letsConnectContext["h2"]["content"]}
            </h2>
            <button
                id={letsConnectContext["button"]["id"]}
                className={letsConnectContext["button"]["className"]}
                onClick={() => window.open(
                    letsConnectContext["openWindow"]["url"],
                    letsConnectContext["openWindow"]["target"])}>
                {letsConnectContext["button"]["content"]}
            </button>
        </section>
    );
}