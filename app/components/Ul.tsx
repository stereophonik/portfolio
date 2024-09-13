export default function UlComponent({ id, className, children }): React.ReactElement {
    return <ul id={ id } className={ className }>{ children }</ul>
}