import { useContext } from "react";

import ProfileImageComponent from "./ProfileImage";
import ProfileHeadingsComponent from "./ProfileHeadings";

import { SizeContext } from "../contexts/Size";

export default function ProfileComponent() {
    const sizeContext = useContext(SizeContext);
    const divHeight = sizeContext["isSmall"] ? "50vw" : "25vw";

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    display: "grid",
                    rowGap: "0",
                    columnGap: "1%",
                    gridTemplateColumns: "5% 25% 70%",
                    width: "100vw",
                    height: divHeight,
                    textAlign: "center"
                }}>
                <div style={{
                        gridColumn: "1",
                        height: "100%"
                    }}></div>
                <ProfileImageComponent />
                <ProfileHeadingsComponent />
            </div>
        </>
    );
}