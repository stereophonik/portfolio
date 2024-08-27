import Image from "next/image";
import { useContext } from "react";

import { ProfileImageContext } from "../contexts/ProfileImage";

export default function ProfileImageComponent() {
    const profileImageContext = useContext(ProfileImageContext);

    return (
        <Image
            className={profileImageContext["className"]}
            src={profileImageContext["src"]}
            alt={profileImageContext["alt"]}
            width={profileImageContext["width"]}
            height={profileImageContext["height"]}
            style={profileImageContext["style"]}
        />
    );
}