import { useContext } from "react";

import SectionComponent from "../../../Section";
import H1Component from "../../../H1";
import UlComponent from "../../../Ul";
import H2Component from "../../../H2";
import LiComponent from "../../../Li";

import { AboutContext } from "../../../../contexts/About";
import LinkComponent from "../../../Link";

export default function SectionSkillsMainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id=""
            style={{}}>
            <H1Component
                id={aboutContext["h1sMain"][1]["id"]}
                className={aboutContext["h1sMain"][1]["className"]}
                style={aboutContext["h1sMain"][1]["style"]}>
                {aboutContext["h1sMain"][1]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["h2sMain"][1]["id"]}
                    className={aboutContext["h2sMain"][1]["className"]}
                    style={aboutContext["h2sMain"][1]["style"]}>
                    {
                        aboutContext["lisMain"].map((liMain) =>
                            <LiComponent
                                key={liMain["key"]}
                                style={liMain["style"]}>
                                <LinkComponent
                                    href={aboutContext["linksMain"][aboutContext["lisMain"].indexOf(liMain)]["href"]}>
                                    {aboutContext["linksMain"][aboutContext["lisMain"].indexOf(liMain)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}