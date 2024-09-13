export default function FooterComponent({ id, className, children }): React.ReactElement {
    return <footer id={id} className={className}>{children}</footer>;
}