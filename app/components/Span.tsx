export default function SpanComponent({ id, className, children }): React.ReactElement {
    return <span id={ id } className={ className }>{ children }</span>;
}