import AboutComponent from "../About";
import IntroAboutComponent from "./Intro";
import MainAboutComponent from "./Main";
import OutroAboutComponent from "./Outro";

export default function PrimaryAboutComponent() {
    return (
        <AboutComponent>
            <IntroAboutComponent />
            <MainAboutComponent />
            <OutroAboutComponent />
        </AboutComponent>
    );
}