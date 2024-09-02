import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import {ProfileContext} from "../../contexts/Profile";

export default function SectionProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <SectionComponent
            style={profileContext["styleProfile"]}>
            <DivComponent
                id={profileContext["div"]["id"]}
                style={profileContext["div"]["style"]}> </DivComponent>
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </SectionComponent>
    );
}