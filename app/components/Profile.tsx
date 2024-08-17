export default function Profile({ src, alt, h2 }) {
    return (
        <>
            <img className="profileImg" src={src} alt={alt} />
            <h2 className="profileH2">{h2}</h2>
        </>
    );
}