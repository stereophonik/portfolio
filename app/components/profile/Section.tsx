import { useContext } from "react";

import SectionComponent from "../Section";

import { ProfileContext } from "../../contexts/Profile";
import ImgComponent from "../Img";
import H1Component from "../H1";
import H2Component from "../H2";

export default function SectionProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);

    return (
        <SectionComponent
            id={profileContext["section"]["id"]}
            className={profileContext["section"]["className"]}>
            <ImgComponent
                id={profileContext["img"]["id"]}
                className={profileContext["img"]["className"]}
                src={profileContext["img"]["src"]}
                alt={profileContext["img"]["alt"]}
            />
            <H1Component
                id={profileContext["h1"]["id"]}
                className={profileContext["h1"]["className"]}>
                {profileContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={profileContext["h2"]["id"]}
                className={profileContext["h2"]["className"]}>
                {profileContext["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}