import SectionComponent from "../Section";
import SectionIntroAboutComponent from "./intro/Section";
import SectionMainAboutComponent from "./main/Section";
import SectionOutroAboutComponent from "./outro/Section";

export default function SectionAboutComponent() {
    return (
        <SectionComponent
            id="sectionAbout"
            style={{}}>
            <SectionIntroAboutComponent />
            <SectionMainAboutComponent />
            <SectionOutroAboutComponent />
        </SectionComponent>
    );
}