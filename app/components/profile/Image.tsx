import { useContext } from "react";

import ImageComponent from "../Image";

import { ProfileContext } from "../../contexts/Profile";

export default function ImageProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return <ImageComponent
            src={profileContext["srcImage"]}
            alt={profileContext["altImage"]}
            style={profileContext["styleImage"]}
            width={profileContext["widthImage"]}
            height={profileContext["heightImage"]}
    />;
}