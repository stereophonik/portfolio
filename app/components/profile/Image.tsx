import Image from "next/image";
import { useContext } from "react";

import { SizingContext } from "../../contexts/Sizing";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizeContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <Image
            src={nonSpecificContext["imageSrc"]}
            alt={nonSpecificContext["imageAlt"]}
            style={nonSpecificContext["imageStyle"]}
            width={sizeContext["image"]["width"]}
            height={sizeContext["image"]["height"]}
        />
    );
}