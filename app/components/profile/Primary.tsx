import { useContext } from "react";

import DivProfileComponent from "./Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import { StyleContext } from "../../contexts/Style";

export default function PrimaryProfileComponent() {
    const styleContext = useContext(StyleContext);

    return (
        <div style={styleContext["profile"]}>
            <DivProfileComponent />
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </div>
    );
}