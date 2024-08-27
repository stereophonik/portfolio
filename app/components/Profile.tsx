import { useContext } from "react";

import DivProfileComponent from "./profile/Div";
import ImageProfileComponent from "./profile/Image";
import HeadingsProfileComponent from "./profile/Headings";

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
                <DivProfileComponent />
                <ImageProfileComponent />
                <HeadingsProfileComponent />
            </div>
        </>
    );
}