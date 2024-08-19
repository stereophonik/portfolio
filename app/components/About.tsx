export default function About({ startings, tableBringings, technicalSkills, endings }) {
    return (
        <>
            <p className="aboutP">{startings[0]}</p>
            <p className="aboutP">{startings[1]}</p>
            <h2 className="aboutHeading">What I bring to the table:</h2>
            <ul className="aboutUl" style={{
                backgroundColor: "#0464ff",
                color: "yellow"
            }}>
                <li className="aboutLi">{tableBringings[0]}</li>
                <li className="aboutLi">{tableBringings[1]}</li>
            </ul>
            <h2 className="aboutHeading">Technical Skills:</h2>
            <ul className="aboutUl" style={{
                backgroundColor: "#0464ff",
                color: "yellow"
            }}>
                <li className="aboutLi">Programming Languages: {technicalSkills.programmingLanguage}</li>
                <li className="aboutLi">Website Platform: {technicalSkills.websitePlatform}</li>
                <li className="aboutLi">Version Control: {technicalSkills.versionControl}</li>
            </ul>
            <p className="aboutP">{endings[0]}</p>
            <p className="aboutP">{endings[1]}<br />{endings[2]}</p>
        </>
    );
}