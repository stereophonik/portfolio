import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";

export default function SectionWhatIOfferComponent(): React.ReactElement {
    const whatIOfferContext: {} = useContext(WhatIOfferContext);

    return (
        <SectionComponent
            id={whatIOfferContext["section"]["id"]}
            className={whatIOfferContext["section"]["className"]}>
            <H1Component
                id={whatIOfferContext["h1"]["id"]}
                className={whatIOfferContext["h1"]["className"]}>
                {whatIOfferContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={whatIOfferContext["h2"]["id"]}
                className={whatIOfferContext["h2"]["className"]}>
                {whatIOfferContext["h2"]["content"]}
            </H2Component>
            <UlComponent
                id={whatIOfferContext["ul"]["id"]}
                className={whatIOfferContext["ul"]["className"]}>
                {
                    whatIOfferContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className={li["className"]}
                            key={li["key"]}>
                            {li["content"]}
                        </LiComponent>
                    )
                }
            </UlComponent>
        </SectionComponent>
    );
}