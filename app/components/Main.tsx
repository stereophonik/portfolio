import { IsSmall } from "../contexts/IsSmall";

export default function Main({ isSmall, children }) {
    return (
        <main className="main">
            <IsSmall.Provider value={isSmall}>
                {children}
            </IsSmall.Provider>
        </main>
    );
}