import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { AboutContext } from "../../contexts/About";

export default function IntroAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <DivComponent id="intro" style={aboutContext["styleIntro"]}>
            <DivComponent id="subIntro01" style={{
                height: "10%"
            }}> </DivComponent>
            <DivComponent id="subIntro02" style={{}}>
                <H1Component id="h1Headings" className={aboutContext["h1Intro"]["className"]} style={{
                        margin: 0,
                        fontSize: aboutContext["h1Intro"]["fontSize"]
                    }}>
                    Hello!
                </H1Component>
                {
                    aboutContext["intro"].map((intro) =>
                        <H2Component id="introH2" className={aboutContext["h2Intro"]["className"]} style={{
                                margin: 0,
                                fontSize: aboutContext["h2Intro"]["fontSize"]
                            }}>
                            {intro}
                        </H2Component>
                    )
                }
            </DivComponent>
        </DivComponent>
    );
}