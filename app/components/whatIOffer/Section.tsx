import { useContext } from "react";
import { WhatIOfferContext } from "../../contexts/WhatIOffer";

export default function SectionWhatIOfferComponent(): React.ReactElement {
    const whatIOfferContext: {} = useContext(WhatIOfferContext);

    return (
        <section
            id={whatIOfferContext["section"]["id"]}
            className={whatIOfferContext["section"]["className"]}>
            <h1
                id={whatIOfferContext["h1"]["id"]}
                className={whatIOfferContext["h1"]["className"]}>
                <span
                    id={whatIOfferContext["aaSpan"]["id"]}
                    className={whatIOfferContext["aaSpan"]["className"]}>
                    {whatIOfferContext["aaSpan"]["content"]}
                </span>
                <span
                    id={whatIOfferContext["abSpan"]["id"]}
                    className={whatIOfferContext["abSpan"]["className"]}>
                    {whatIOfferContext["abSpan"]["content"]}
                </span>
            </h1>
            <h2
                id={whatIOfferContext["h2"]["id"]}
                className={whatIOfferContext["h2"]["className"]}>
                {whatIOfferContext["h2"]["content"]}
            </h2>
            <ul
                id={whatIOfferContext["ul"]["id"]}
                className={whatIOfferContext["ul"]["className"]}>
                <li
                    className={whatIOfferContext["lis"][0]["className"]}
                    key={whatIOfferContext["lis"][0]["key"]}>
                    {whatIOfferContext["lis"][0]["content"]}
                </li>
                <li
                    className={whatIOfferContext["lis"][1]["className"]}
                    key={whatIOfferContext["lis"][1]["key"]}>
                    {whatIOfferContext["lis"][1]["content"]}
                </li>
                <li
                    className={whatIOfferContext["lis"][2]["className"]}
                    key={whatIOfferContext["lis"][2]["key"]}>
                    {whatIOfferContext["lis"][2]["content"]}
                </li>
            </ul>
        </section>
    );
}