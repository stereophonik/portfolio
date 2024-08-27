import Image from "next/image";
import { useContext } from "react";

import { SizingContext } from "../../contexts/Sizing";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizingContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <Image
            src={nonSpecificContext["imageSrc"]}
            alt={nonSpecificContext["imageAlt"]}
            style={nonSpecificContext["imageStyle"]}
            width={sizingContext["image"]["width"]}
            height={sizingContext["image"]["height"]}
        />
    );
}