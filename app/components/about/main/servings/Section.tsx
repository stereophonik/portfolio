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
                id={aboutContext["servingsMain"]["h1"]["id"]}
                className={aboutContext["servingsMain"]["h1"]["className"]}
                style={aboutContext["servingsMain"]["h1"]["style"]}>
                {aboutContext["servingsMain"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["servingsMain"]["h2"]["id"]}
                    className={aboutContext["servingsMain"]["h2"]["className"]}
                    style={aboutContext["servingsMain"]["h2"]["style"]}>
                    {
                        aboutContext["servingsMain"]["lis"].map((li) =>
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