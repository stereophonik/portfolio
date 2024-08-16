export default function Profile() {
    const src = "./picture.jpg";
    const alt = "Nikolai Reyes";

    return (
        <>
            <img className="profileImg" src={src} alt={alt} />
            <h2 className="profileHeading">Wordpress Developer | Front-end Developer | Quality Tester</h2>
        </>
    );
}