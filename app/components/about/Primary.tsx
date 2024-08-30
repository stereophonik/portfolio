import EndingsAboutComponent from "./Outro";
import StartingsAboutComponent from "./Intro";
import MiddlesAboutComponent from "./Main";

export default function PrimaryAboutComponent() {
    return (
        <>
            <StartingsAboutComponent />
            <MiddlesAboutComponent />
            <EndingsAboutComponent />
        </>
    );
}