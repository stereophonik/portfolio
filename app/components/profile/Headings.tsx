import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { ProfileContext } from "../../contexts/Profile";

export default function HeadingsProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <DivComponent id="headings" style={profileContext["styleHeadings"]}>
            <H1Component id="h1Headings" className={profileContext["classNameH1Headings"]} style={{
                    margin: 0,
                    fontSize: profileContext["fontSizeH1Headings"]
                }}>
                {profileContext["h1Headings"]}
            </H1Component>
            <H2Component id="h2Headings" className={profileContext["classNameH2Headings"]} style={{
                    margin: 0,
                    fontSize: profileContext["fontSizeH2Headings"]
                }}>
                {profileContext["h2Headings"]}
            </H2Component>
        </DivComponent>
    );
}