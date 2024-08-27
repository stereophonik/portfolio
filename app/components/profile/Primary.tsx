import { useContext } from "react";

import DivProfileComponent from "./Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import { StylingContext } from "../../contexts/Styling";

export default function PrimaryProfileComponent() {
    const styleContext = useContext(StylingContext);

    return (
        <div style={styleContext["profile"]}>
            <DivProfileComponent />
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </div>
    );
}