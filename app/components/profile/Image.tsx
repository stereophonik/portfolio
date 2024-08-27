import Image from "next/image";
import { useContext } from "react";

import { SizeContext } from "../../contexts/Size";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizeContext = useContext(SizeContext);
    const nonSpecificContext = useContext(NonSpecificContext);
    const width = sizeContext["isSmall"] ? 87 : 261
    const height = sizeContext["isSmall"] ? 116 : 349

    return (
        <Image
            src={nonSpecificContext["imageSrc"]}
            alt={nonSpecificContext["imageAlt"]}
            style={nonSpecificContext["imageStyle"]}
            width={width}
            height={height}
        />
    );
}