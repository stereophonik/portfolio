export default function H2Component({ id, className, style, children }): React.ReactElement {
    return <h2 id={id} className={className} style={style}>{children}</h2>;
}