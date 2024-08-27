import { useContext } from "react";

import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
import { ProfileContext } from "../contexts/Profile";

export default function ProfileHeadingsComponent() {
    const sizeContext = useContext(SizeContext);
    const profileContext = useContext(ProfileContext);
    const classNameContext = useContext(ClassNameContext);
    const h1FontSize = sizeContext["isSmall"] ? "1rem" : "3rem";
    const h2FontSize = sizeContext["isSmall"] ? "0.75rem" : "2rem";

    return (
        <>
            <h1 id="profileH1" className={classNameContext["h1ClassName"]} style={{
                    gridColumn: "3",
                    fontSize: h1FontSize
                }}>
                {profileContext["h1"]}
            </h1>
            <h2 id="profileH2" className={classNameContext["h2ClassName"]} style={{
                    gridColumn: "3",
                    fontSize: h2FontSize
                }}>
                {profileContext["h2"]}
            </h2>
        </>
    );
}