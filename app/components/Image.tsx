import Image from "next/image";
import { useContext } from "react";

import { ImageContext } from "../contexts/Image";

export default function ImageComponent() {
    const imageContext = useContext(ImageContext);

    return (
        <Image
            className={imageContext["className"]}
            src={imageContext["src"]}
            alt={imageContext["alt"]}
            width={imageContext["width"]}
            height={imageContext["height"]}
            style={imageContext["style"]}
        />
    );
}