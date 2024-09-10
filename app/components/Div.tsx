export default function DivComponent({ id, className, children }): React.ReactElement {
    return <div id={id} className={className}>{children}</div>;
}