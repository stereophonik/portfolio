import OutroAboutComponent from "./Outro";
import IntroAboutComponent from "./Intro";
import MainAboutComponent from "./Main";

export default function PrimaryAboutComponent() {
    return (
        <>
            <IntroAboutComponent />
            <MainAboutComponent />
            <OutroAboutComponent />
        </>
    );
}