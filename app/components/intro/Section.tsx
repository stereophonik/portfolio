import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";

import { IntroContext } from "../../contexts/Intro";
import LiComponent from "../Li";
import UlComponent from "../Ul";
import BrComponent from "../Br";

export default function SectionIntroComponent(): React.ReactElement {
    const introContext: {} = useContext(IntroContext);

    return (
        <SectionComponent
            id={introContext["section"]["id"]}
            className={introContext["section"]["className"]}
            style={introContext["section"]["style"]}>
            <H1Component
                id={introContext["h1"]["id"]}
                className={introContext["h1"]["className"]}
                style={introContext["h1"]["style"]}>
                {introContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={introContext["h2"]["id"]}
                className={introContext["h2"]["className"]}
                style={introContext["h2"]["style"]}>
                {introContext["h2"]["content"]}
            </H2Component>
            <BrComponent />
            <UlComponent
                id={introContext["ul"]["id"]}
                className={introContext["ul"]["className"]}>
                {
                    introContext["lis"].map((li: { [x: string]: any; }) =>
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