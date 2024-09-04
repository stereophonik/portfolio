import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import ImageProfileComponent from "./Image";
import SectionHeadingsProfileComponent from "./headings/Section";

import {ProfileContext} from "../../contexts/Profile";

export default function SectionProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <SectionComponent
            id={profileContext["section"]["id"]}
            style={profileContext["section"]["style"]}>
            <DivComponent
                id={profileContext["div"]["id"]}
                style={profileContext["div"]["style"]}>
                {profileContext["div"]["content"]}
            </DivComponent>
            <ImageProfileComponent />
            <SectionHeadingsProfileComponent />
        </SectionComponent>
    );
}