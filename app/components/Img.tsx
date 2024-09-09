export default function ImgComponent({ id, className, src, alt }): React.ReactElement {
    return <img
        id={id}
        className={className}
        src={src}
        alt={alt}
    />;
}