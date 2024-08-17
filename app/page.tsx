import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";

export default function Page() {
    const profileSrc = "./picture.jpg";
    const profileAlt = "Nikolai Reyes";
    const profileHeading = "Wordpress Developer | Front-end Developer | Quality Tester";

    const aboutTableBringings = [
        "Expertise in technology for front-end development",
        "Selecting and applying concepts tailored for front-end applications"
    ]

    const aboutTechnicalSkills = {
        programmingLanguage: "JavaScript",
        websitePlatform: "WordPress",
        versionControl: "Git"
    }

    return (
        <>
            <Header />
            <Profile
                src={profileSrc}
                alt={profileAlt}
                h2={profileHeading}
            />
            <About
                tableBringings={aboutTableBringings}
                technicalSkills={aboutTechnicalSkills}
            />
        </>
    );
}