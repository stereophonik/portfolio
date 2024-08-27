import { useContext } from "react";

import { ProfileContext } from "../../contexts/Profile";

export default function DivProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <div style={profileContext["divStyle"]}></div>
    );
}