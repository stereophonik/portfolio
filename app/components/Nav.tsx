export default function NavComponent({ id, className, style, children }) {
    return <nav id={id} className={className} style={style}>{children}</nav>;
}