import { useContext } from "react";

import ProfileComponent from "../Profile";
import DivComponent from "../Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import {ProfileContext} from "../../contexts/Profile";

export default function PrimaryProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <ProfileComponent
            style={profileContext["styleProfile"]}>
            <DivComponent
                id={profileContext["div"]["id"]}
                style={profileContext["div"]["style"]}> </DivComponent>
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </ProfileComponent>
    );
}