import Image from "next/image";
import { useContext } from "react";

import { SizeContext } from "../../contexts/Size";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function ImageProfileComponent() {
    const sizeContext = useContext(SizeContext);
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