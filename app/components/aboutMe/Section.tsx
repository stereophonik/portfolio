import { useContext } from "react";
import { AboutMeContext } from "../../contexts/AboutMe";

export default function SectionAboutMeComponent(): React.ReactElement {
    const aboutMeContext: {} = useContext(AboutMeContext);

    return (
        <section
            id={aboutMeContext["section"]["id"]}
            className={aboutMeContext["section"]["className"]}>
            <div
                id={aboutMeContext["div"]["id"]}
                className={aboutMeContext["div"]["className"]}>
                <h1
                    id={aboutMeContext["h1"]["id"]}
                    className={aboutMeContext["h1"]["className"]}>
                    <span
                        id={aboutMeContext["zySpan"]["id"]}
                        className={aboutMeContext["zySpan"]["className"]}>
                        {aboutMeContext["zySpan"]["content"]}
                    </span>
                    <span
                        id={aboutMeContext["zzSpan"]["id"]}
                        className={aboutMeContext["zzSpan"]["className"]}>
                        {aboutMeContext["zzSpan"]["content"]}
                    </span>
                </h1>
                <ul
                    id={aboutMeContext["ul"]["id"]}
                    className={aboutMeContext["ul"]["className"]}>
                    <li
                        className={aboutMeContext["lis"][1]["className"]}
                        key={aboutMeContext["lis"][1]["key"]}>
                        {aboutMeContext["lis"][1]["content"]}
                    </li>
                    <li
                        className={aboutMeContext["lis"][2]["className"]}
                        key={aboutMeContext["lis"][2]["key"]}>
                        <span
                            id={aboutMeContext["abSpan"]["id"]}
                            className={aboutMeContext["abSpan"]["className"]}>
                            {aboutMeContext["abSpan"]["content"]}
                        </span>
                        <strong>
                            <span
                                id={aboutMeContext["acSpan"]["id"]}
                                className={aboutMeContext["acSpan"]["className"]}>
                                {aboutMeContext["acSpan"]["content"]}
                            </span>
                        </strong>
                        <span
                            id={aboutMeContext["adSpan"]["id"]}
                            className={aboutMeContext["adSpan"]["className"]}>
                            {aboutMeContext["adSpan"]["content"]}
                        </span>
                    </li>
                </ul>
                <button
                    id={aboutMeContext["button"]["id"]}
                    className={aboutMeContext["button"]["className"]}
                    onClick={() => window.open(
                        aboutMeContext["openWindow"]["url"],
                        aboutMeContext["openWindow"]["target"])}>
                    {aboutMeContext["button"]["content"]}
                </button>
            </div>
            <img
                id={aboutMeContext["img"]["id"]}
                className={aboutMeContext["img"]["className"]}
                src={aboutMeContext["img"]["src"]}
                alt={aboutMeContext["img"]["alt"]}
            />
        </section>
    );
}