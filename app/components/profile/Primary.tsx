import { useContext } from "react";

import DivComponent from "../Div";
import DivProfileComponent from "./Div";
import ImageProfileComponent from "./Image";
import HeadingsProfileComponent from "./Headings";

import { StylingContext } from "../../contexts/Styling";

export default function PrimaryProfileComponent() {
    const stylingContext = useContext(StylingContext);

    return (
        <DivComponent style={stylingContext["profile"]}>
            <DivProfileComponent />
            <ImageProfileComponent />
            <HeadingsProfileComponent />
        </DivComponent>
    );
}