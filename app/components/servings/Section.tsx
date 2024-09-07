import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";

import { ServingsContext } from "../../contexts/Servings";

export default function SectionServingsComponent(): React.ReactElement {
    const servingsContext: {} = useContext(ServingsContext);

    return (
        <SectionComponent
            id={servingsContext["section"]["id"]}
            className={servingsContext["section"]["className"]}
            style={servingsContext["section"]["style"]}>
            <DivComponent
                id={servingsContext["div"]["id"]}
                className={servingsContext["div"]["className"]}>
                {servingsContext["div"]["content"]}
            </DivComponent>
            <H1Component
                id={servingsContext["h1"]["id"]}
                className={servingsContext["h1"]["className"]}
                style={servingsContext["h1"]["style"]}>
                {servingsContext["h1"]["content"]}
            </H1Component>
            <UlComponent
                id={servingsContext["ul"]["id"]}
                className={servingsContext["ul"]["className"]}>
                <H2Component
                    id={servingsContext["h2"]["id"]}
                    className={servingsContext["h2"]["className"]}
                    style={servingsContext["h2"]["style"]}>
                    {
                        servingsContext["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                {li["content"]}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}