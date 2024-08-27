import EndingsAboutComponent from "./Endings";
import StartingsAboutComponent from "./Startings";
import MiddlesAboutComponent from "./Middles";

export default function PrimaryAboutComponent() {
    return (
        <>
            <StartingsAboutComponent />
            <MiddlesAboutComponent />
            <EndingsAboutComponent />
        </>
    );
}