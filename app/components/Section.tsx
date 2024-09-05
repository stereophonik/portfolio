export default function SectionComponent({ id, style, children }): React.ReactElement {
    return <section id={id} style={style}>{children}</section>;
}