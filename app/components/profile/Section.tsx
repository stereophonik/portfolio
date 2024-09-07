import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";

import { ProfileContext } from "../../contexts/Profile";
import ImageComponent from "../Image";
import H1Component from "../H1";
import H2Component from "../H2";

export default function SectionProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);

    return (
        <SectionComponent
            id={profileContext["section"]["id"]}
            style={profileContext["section"]["style"]}>
            <DivComponent
                id={profileContext["div"]["id"]}
                className={profileContext["div"]["className"]}>
                {profileContext["div"]["content"]}
            </DivComponent>
            <ImageComponent
                id={profileContext["image"]["id"]}
                className={profileContext["image"]["className"]}
                src={profileContext["image"]["src"]}
                alt={profileContext["image"]["alt"]}
                width={profileContext["image"]["width"]}
                height={profileContext["image"]["height"]}
            />
            <H1Component
                id={profileContext["h1"]["id"]}
                className={profileContext["h1"]["className"]}
                style={profileContext["h1"]["style"]}>
                {profileContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={profileContext["h2"]["id"]}
                className={profileContext["h2"]["className"]}
                style={profileContext["h2"]["style"]}>
                {profileContext["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}