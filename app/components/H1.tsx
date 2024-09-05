export default function H1Component({ id, className, style, children }): React.ReactElement {
    return <h1 id={id} className={className} style={style}>{children}</h1>;
}