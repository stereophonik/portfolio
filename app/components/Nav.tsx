export default function NavComponent({ id, className, style, children }): React.ReactElement {
    return <nav id={id} className={className} style={style}>{children}</nav>;
}