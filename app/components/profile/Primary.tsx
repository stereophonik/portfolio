import { useContext } from "react";

import DivComponent from "../Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import { StylingContext } from "../../contexts/Styling";

export default function PrimaryProfileComponent() {
    const stylingContext = useContext(StylingContext);

    return (
        <DivComponent id="profile" style={stylingContext["profile"]}>
            <DivComponent id="subProfile" style={{
                    height: "10%"
                }}> </DivComponent>
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </DivComponent>
    );
}