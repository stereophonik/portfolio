import Image from "next/image";

export default function ImageComponent({ src, alt, style, width, height }) {
    return <Image
        src={src}
        alt={alt}
        style={style}
        width={width}
        height={height}
    />;
}