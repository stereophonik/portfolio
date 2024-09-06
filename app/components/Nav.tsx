export default function NavComponent({ id, className, children }): React.ReactElement {
    return <nav id={id} className={className}>{children}</nav>;
}