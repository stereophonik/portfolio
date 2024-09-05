import Image from "next/image";

export default function ImageComponent({ id, src, alt, style, width, height }): React.ReactElement {
    return <Image
        id={id}
        src={src}
        alt={alt}
        style={style}
        width={width}
        height={height}
    />;
}