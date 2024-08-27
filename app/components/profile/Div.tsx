import { useContext } from "react";

import DivComponent from "../Div";

import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function DivProfileComponent() {
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <DivComponent style={nonSpecificContext["divStyle"]}> </DivComponent>
    );
}