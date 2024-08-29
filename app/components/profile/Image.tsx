import { useContext } from "react";

import ImageComponent from "../Image";

import { SizingContext } from "../../contexts/Sizing";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizingContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return <ImageComponent
            src={nonSpecificContext["imageSrc"]}
            alt={nonSpecificContext["imageAlt"]}
            style={nonSpecificContext["imageStyle"]}
            width={sizingContext["image"]["width"]}
            height={sizingContext["image"]["height"]}
    />;
}