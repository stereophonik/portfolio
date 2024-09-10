export default function H2Component({ id, className, children }): React.ReactElement {
    return <h2 id={id} className={className}>{children}</h2>;
}