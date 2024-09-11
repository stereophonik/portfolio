import { useContext } from "react";

import SectionComponent from "../Section";

import { ProfileContext } from "../../contexts/Profile";
import { IntroContext } from "../../contexts/Intro";
import ImgComponent from "../Img";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";

export default function SectionProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);
    const introContext: {} = useContext(IntroContext);

    return (
        <section
            style={{
                display: "flex"
            }}
            id={profileContext["section"]["id"]}
            className={profileContext["section"]["className"]}>
            <ImgComponent
                id={profileContext["img"]["id"]}
                className={profileContext["img"]["className"]}
                src={profileContext["img"]["src"]}
                alt={profileContext["img"]["alt"]}
            />
            <div>
                <H1Component
                    id={profileContext["h1"]["id"]}
                    className={profileContext["h1"]["className"]}>
                    {profileContext["h1"]["content"]}
                </H1Component>
                <H2Component
                    id={profileContext["h2"]["id"]}
                    className="classNameKeme">
                    {profileContext["h2"]["content"]}
                </H2Component>
                <H2Component
                    id={introContext["h2"]["id"]}
                    className="classNameKembular">
                    {introContext["h2"]["content"]}
                </H2Component>
                <UlComponent
                    id={introContext["ul"]["id"]}
                    className={introContext["ul"]["className"]}>
                    {
                        introContext["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                className="classNameKeme"
                                key={li["key"]}>
                                {li["content"]}
                            </LiComponent>
                        )
                    }
                    <LiComponent
                        className="classNameKeme"
                        key="3">
                        Simply put, I’m here to make things work smarter, not harder!
                    </LiComponent>
                </UlComponent>
            </div>
        </section>
    );
}