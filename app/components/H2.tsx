export default function H2Component({ id, className, style, children }) {
    return <h2 id={id} className={className} style={style}>{children}</h2>;
}