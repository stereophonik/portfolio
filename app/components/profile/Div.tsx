import { useContext } from "react";

import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function DivProfileComponent() {
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <div style={nonSpecificContext["divStyle"]}></div>
    );
}