import Profile from "./components/Profile";
import About from "./components/About";

export default function Page() {
    const heading = "Nikolai R. - Portfolio";

    return (
        <>
            <h1>{heading}</h1>
            <Profile />
            <About />
        </>
    );
}