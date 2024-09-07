export default function SectionComponent({ id, className, style, children }): React.ReactElement {
    return <section id={id} className={className} style={style}>{children}</section>;
}