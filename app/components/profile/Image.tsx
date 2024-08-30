import { useContext } from "react";

import ImageComponent from "../Image";

import { SizingContext } from "../../contexts/Sizing";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizingContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return <ImageComponent
            src={nonSpecificContext["srcImage"]}
            alt={nonSpecificContext["altImage"]}
            style={nonSpecificContext["styleImage"]}
            width={sizingContext["widthImage"]}
            height={sizingContext["heightImage"]}
    />;
}