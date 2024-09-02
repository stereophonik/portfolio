export default function SectionComponent({ id, style, children }) {
    return <section id={id} style={style}>{children}</section>;
}