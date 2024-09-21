export default function IframeComponent({ id, className, src }): React.ReactElement {
    return <iframe id={ id } className={ className } src={ src }></iframe>;
}