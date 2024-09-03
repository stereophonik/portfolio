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
                id={aboutContext["h1sMain"][0]["id"]}
                className={aboutContext["h1sMain"][0]["className"]}
                style={aboutContext["h1sMain"][0]["style"]}>
                {aboutContext["h1sMain"][0]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["h2sMain"][0]["id"]}
                    className={aboutContext["h2sMain"][0]["className"]}
                    style={aboutContext["h2sMain"][0]["style"]}>
                    {
                        aboutContext["lisMain"].map((liMain) =>
                            <LiComponent
                                key={liMain["key"]}
                                style={liMain["style"]}>
                                {liMain["content"]}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}