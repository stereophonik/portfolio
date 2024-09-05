export default function H3Component({ id, className, style, children }): React.ReactElement {
    return <h3 id={id} className={className} style={style}>{children}</h3>;
}