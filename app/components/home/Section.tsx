import { useContext } from "react";
import { HomeContext } from "../../contexts/Home";

export default function SectionHomeComponent(): React.ReactElement {
    const homeContext: {} = useContext(HomeContext);

    return (
        <section
            id={homeContext["section"]["id"]}
            className={homeContext["section"]["className"]}>
            <img
                id={homeContext["img"]["id"]}
                className={homeContext["img"]["className"]}
                src={homeContext["img"]["src"]}
                alt={homeContext["img"]["alt"]}
            />
            <div
                id={homeContext["div"]["id"]}
                className={homeContext["div"]["className"]}>
                <h1
                    id={homeContext["h1"]["id"]}
                    className={homeContext["h1"]["className"]}>
                    <span
                        id={homeContext["zySpan"]["id"]}
                        className={homeContext["zySpan"]["className"]}>
                        {homeContext["zySpan"]["content"]}
                    </span>
                    <span
                        id={homeContext["zzSpan"]["id"]}
                        className={homeContext["zzSpan"]["className"]}>
                        {homeContext["zzSpan"]["content"]}
                    </span>
                </h1>
                <span
                    id={homeContext["aaSpan"]["id"]}
                    className={homeContext["aaSpan"]["className"]}>
                    {homeContext["aaSpan"]["content"]}
                </span>
                <h2

                    id={homeContext["aaH2"]["id"]}
                    className={homeContext["aaH2"]["className"]}>
                    {homeContext["aaH2"]["content"]}
                </h2>
                <h2
                    id={homeContext["abH2"]["id"]}
                    className={homeContext["abH2"]["className"]}>
                    {homeContext["abH2"]["content"]}
                </h2>
                <button
                    id={homeContext["button"]["id"]}
                    className={homeContext["button"]["className"]}
                    onClick={() => window.open(
                        homeContext["openWindow"]["url"],
                        homeContext["openWindow"]["target"])}>
                    {homeContext["button"]["content"]}
                </button>
            </div>
        </section>
    );
}