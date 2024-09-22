import { useContext } from "react";
import { MyExperiencesContext } from "../../contexts/MyExperiences";

export default function SectionMyExperiencesComponent(): React.ReactElement {
    const myExperiencesContext: {} = useContext(MyExperiencesContext);

    return (
        <section
            id={myExperiencesContext["section"]["id"]}
            className={myExperiencesContext["section"]["className"]}>
            <h1
                id={myExperiencesContext["h1"]["id"]}
                className={myExperiencesContext["h1"]["className"]}>
                <span
                    id={myExperiencesContext["aaSpan"]["id"]}
                    className={myExperiencesContext["aaSpan"]["className"]}>
                    {myExperiencesContext["aaSpan"]["content"]}
                </span>
                <span
                    id={myExperiencesContext["abSpan"]["id"]}
                    className={myExperiencesContext["abSpan"]["className"]}>
                    {myExperiencesContext["abSpan"]["content"]}
                </span>
            </h1>
            <h2
                id={myExperiencesContext["h2"]["id"]}
                className={myExperiencesContext["h2"]["className"]}>
                {myExperiencesContext["h2"]["content"]}
            </h2>
            <div
                id={myExperiencesContext["span"]["id"]}
                className="className01Span">
                Since 2013 - Functional UI, API, and desktop testing experiences
            </div>
            <div
                id={myExperiencesContext["span"]["id"]}
                className="className01Span">
                Since June 2024 - editing and maintaining the website of Class Constructions
            </div>
        </section>
    );
}