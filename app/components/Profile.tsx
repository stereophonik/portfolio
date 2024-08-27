import { useContext } from "react";

import ImageComponent from "./Image";

import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
import { ProfileContext } from "../contexts/Profile";
import { ImageContext } from "../contexts/Image";

export default function ProfileComponent() {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
    const profileContext = useContext(ProfileContext);
    const height = sizeContext["isSmall"] ? "50vw" : "25vw";
    const h1FontSize = sizeContext["isSmall"] ? "1rem" : "3rem";
    const h2FontSize = sizeContext["isSmall"] ? "0.75rem" : "2rem";
    const imageWidth = sizeContext["isSmall"] ? 87 : 261
    const imageHeight = sizeContext["isSmall"] ? 116 : 349

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
                <ImageContext.Provider value={{
                        className: "profileImg",
                        src: profileContext["src"],
                        alt: profileContext["alt"],
                        width: imageWidth,
                        height: imageHeight,
                        style: {
                            gridColumn: "2",
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }
                    }}>
                    <ImageComponent />
                </ImageContext.Provider>
                <div>
                <div style={{
                        height: "30%"
                    }}></div>
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
                </div>
            </div>
        </>
    );
}