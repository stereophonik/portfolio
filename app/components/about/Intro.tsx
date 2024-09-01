import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { AboutContext } from "../../contexts/About";

export default function IntroAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <DivComponent
            id="intro"
            style={aboutContext["styleIntro"]}>
            <DivComponent
                id="01DivIntro"
                style={{
                    height: "10%"
                }}> </DivComponent>
            <DivComponent
                id="02DivIntro"
                style={{}}>
                <H1Component
                    id="h1Intro"
                    className={aboutContext["h1Intro"]["className"]}
                    style={aboutContext["h1Intro"]["style"]}>
                    Hello!
                </H1Component>
                {
                    aboutContext["intros"].map((intro) =>
                        <H2Component
                            id="h2Intro"
                            className={aboutContext["h2Intro"]["className"]}
                            style={aboutContext["h2Intro"]["style"]}>
                            {intro}
                        </H2Component>
                    )
                }
            </DivComponent>
        </DivComponent>
    );
}