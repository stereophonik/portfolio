import Image from "next/image";

export default function ImageComponent({ id, className, src, alt, width, height }): React.ReactElement {
    return <Image
        id={id}
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
    />;
}