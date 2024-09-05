import { useContext } from "react";

import SectionComponent from "../../../Section";
import DivComponent from "../../../Div";
import H1Component from "../../../H1";
import UlComponent from "../../../Ul";
import H2Component from "../../../H2";
import LiComponent from "../../../Li";

import { AboutContext } from "../../../../contexts/About";

export default function SectionServingsMainAboutComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["main"]["servings"]["section"]["id"]}
            style={aboutContext["main"]["servings"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["main"]["servings"]["div"]["id"]}
                style={aboutContext["main"]["servings"]["div"]["style"]}>
                {aboutContext["main"]["servings"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["main"]["servings"]["h1"]["id"]}
                className={aboutContext["main"]["servings"]["h1"]["className"]}
                style={aboutContext["main"]["servings"]["h1"]["style"]}>
                {aboutContext["main"]["servings"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                style={aboutContext["main"]["servings"]["ul"]["style"]}>
                <H2Component
                    id={aboutContext["main"]["servings"]["h2"]["id"]}
                    className={aboutContext["main"]["servings"]["h2"]["className"]}
                    style={aboutContext["main"]["servings"]["h2"]["style"]}>
                    {
                        aboutContext["main"]["servings"]["lis"].map((li: { [x: string]: any; }) =>
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