export default function SectionComponent({ id, className, children }): React.ReactElement {
    return <section id={id} className={className}>{children}</section>;
}