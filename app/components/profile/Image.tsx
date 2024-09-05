import { useContext } from "react";

import ImageComponent from "../Image";

import { ProfileContext } from "../../contexts/Profile";

export default function ImageProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);

    return <ImageComponent
            src={profileContext["image"]["src"]}
            alt={profileContext["image"]["alt"]}
            style={profileContext["image"]["style"]}
            width={profileContext["image"]["width"]}
            height={profileContext["image"]["height"]}
    />;
}