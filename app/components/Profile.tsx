import { useContext } from "react";

import ProfileImageComponent from "./ProfileImage";
import ProfileHeadingsComponent from "./ProfileHeadings";

import { SizeContext } from "../contexts/Size";
import { ProfileContext } from "../contexts/Profile";
import { ProfileImageContext } from "../contexts/ProfileImage";

export default function ProfileComponent() {
    const sizeContext = useContext(SizeContext);
    const profileContext = useContext(ProfileContext);
    const height = sizeContext["isSmall"] ? "50vw" : "25vw";
    const profileImageWidth = sizeContext["isSmall"] ? 87 : 261
    const profileImageHeight = sizeContext["isSmall"] ? 116 : 349

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    display: "grid",
                    rowGap: "0",
                    columnGap: "1%",
                    gridTemplateColumns: "5% 25% 70%",
                    width: "100vw",
                    height: height,
                    textAlign: "center"
                }}>
                <div style={{
                        gridColumn: "1",
                        height: "100%"
                    }}></div>
                <ProfileImageContext.Provider value={{
                        className: "profileImg",
                        src: profileContext["src"],
                        alt: profileContext["alt"],
                        width: profileImageWidth,
                        height: profileImageHeight,
                        style: {
                            gridColumn: "2",
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }
                    }}>
                    <ProfileImageComponent />
                </ProfileImageContext.Provider>
                <div>
                    <div style={{
                            height: "30%"
                        }}></div>
                    <ProfileHeadingsComponent />
                </div>
            </div>
        </>
    );
}