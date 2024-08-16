export default function About() {
    const tableBringings = [
        "Expertise in technology for front-end development",
        "Selecting and applying concepts tailored for front-end applications"
    ]

    const technicalSkills = [
        "Programming Languages: JavaScript (including frameworks like React)",
        "Website Platform: WordPress",
        "Version Control: Git"
    ]

    return (
        <>
            <p className="aboutP">Are you looking to have a website created or edited for your small business?</p>
            <p className="aboutP">I'm here to assist! With 6 years of experience transitioning from quality testing to front-end development, I bring a unique perspective to streamline your workflows and enhance your web applications.</p>
            <h2 className="aboutHeading">What I bring to the table:</h2>
            <ul className="aboutUl" style={{
                backgroundColor: "black",
                color: "white"
            }}>
                <li className="aboutLi">{tableBringings[0]}</li>
                <li className="aboutLi">{tableBringings[1]}</li>
            </ul>
            <h2 className="aboutHeading">Technical Skills:</h2>
            <ul className="aboutUl" style={{
                backgroundColor: "black",
                color: "white"
            }}>
                <li className="aboutLi">{technicalSkills[0]}</li>
                <li className="aboutLi">{technicalSkills[1]}</li>
                <li className="aboutLi">{technicalSkills[2]}</li>
            </ul>
            <p className="aboutP">I understand it's a bit technical, but let's discuss your specific needs. Together, we can achieve your dream website. Looking forward to chatting soon!</p>
            <p className="aboutP">Best regards,<br />Nik</p>
        </>
    );
}