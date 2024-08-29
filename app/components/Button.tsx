export default function ButtonComponent({ className, onClick, style, children }) {
    return (
        <button className={className} onClick={onClick} style={style}>
            {children}
        </button>
    );
}