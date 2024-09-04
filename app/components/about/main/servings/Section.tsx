import { useContext } from "react";

import SectionComponent from "../../../Section";
import H1Component from "../../../H1";
import UlComponent from "../../../Ul";
import H2Component from "../../../H2";
import LiComponent from "../../../Li";

import { AboutContext } from "../../../../contexts/About";

export default function SectionServingsMainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id=""
            style={{}}>
            <H1Component
                id={aboutContext["h1ServingsMain"]["id"]}
                className={aboutContext["h1ServingsMain"]["className"]}
                style={aboutContext["h1ServingsMain"]["style"]}>
                {aboutContext["h1ServingsMain"]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["h2ServingsMain"]["id"]}
                    className={aboutContext["h2ServingsMain"]["className"]}
                    style={aboutContext["h2ServingsMain"]["style"]}>
                    {
                        aboutContext["lisServingsMain"].map((li) =>
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