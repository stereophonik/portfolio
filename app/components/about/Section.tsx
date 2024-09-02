import SectionComponent from "../Section";
import IntroAboutComponent from "./Intro";
import MainAboutComponent from "./Main";
import OutroAboutComponent from "./Outro";

export default function SectionAboutComponent() {
    return (
        <SectionComponent
            style={{}}>
            <IntroAboutComponent />
            <MainAboutComponent />
            <OutroAboutComponent />
        </SectionComponent>
    );
}