import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";

import { AboutContext } from "../../contexts/About";

export default function SectionServingsComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["servings"]["section"]["id"]}
            style={aboutContext["servings"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["servings"]["div"]["id"]}
                className={aboutContext["servings"]["div"]["className"]}>
                {aboutContext["servings"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["servings"]["h1"]["id"]}
                className={aboutContext["servings"]["h1"]["className"]}
                style={aboutContext["servings"]["h1"]["style"]}>
                {aboutContext["servings"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                id={aboutContext["servings"]["ul"]["id"]}
                className={aboutContext["servings"]["ul"]["className"]}>
                <H2Component
                    id={aboutContext["servings"]["h2"]["id"]}
                    className={aboutContext["servings"]["h2"]["className"]}
                    style={aboutContext["servings"]["h2"]["style"]}>
                    {
                        aboutContext["servings"]["lis"].map((li: { [x: string]: any; }) =>
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