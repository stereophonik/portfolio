export default function ButtonComponent({ id, className, onClick, children }): React.ReactElement {
    return <button id={ id } className={ className } onClick={ onClick }>{ children }</button>
}