export default function H1Component({ id, className, children }): React.ReactElement {
    return <h1 id={id} className={className}>{children}</h1>;
}