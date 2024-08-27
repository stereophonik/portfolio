import Image from "next/image";
import { useContext } from "react";

import { SizeContext } from "../contexts/Size";
import { ProfileContext } from "../contexts/Profile";

export default function ProfileImageComponent() {
    const sizeContext = useContext(SizeContext);
    const profileContext = useContext(ProfileContext);
    const width = sizeContext["isSmall"] ? 87 : 261
    const height = sizeContext["isSmall"] ? 116 : 349
    const style = {
        gridColumn: "2",
        maxWidth: "100%",
        maxHeight: "100%"
    }

    return (
        <Image
            src={profileContext["imageSrc"]}
            alt={profileContext["imageAlt"]}
            width={width}
            height={height}
            style={style}
        />
    );
}