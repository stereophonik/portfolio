import { useContext } from "react";

import { ProfileContext } from "../../contexts/Profile";
import { IntroContext } from "../../contexts/Intro";
import ImgComponent from "../Img";
import H1Component from "../H1";
import SpanComponent from "../Span";
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
                <SpanComponent
                    id={profileContext["h2"]["id"]}
                    className="classNameSpan">
                    {profileContext["h2"]["content"]}
                </SpanComponent>
                <H2Component
                    id={introContext["h2"]["id"]}
                    className="className02H2">
                    {introContext["h2"]["content"]}
                </H2Component>
                <UlComponent
                    id={introContext["ul"]["id"]}
                    className={introContext["ul"]["className"]}>
                    {
                        introContext["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                className="classNameVerticalLi"
                                key={li["key"]}>
                                {li["content"]}
                            </LiComponent>
                        )
                    }
                    <LiComponent
                        className="className02VerticalLi"
                        key="3">
                        Simply put, I’m here to <strong>make things work smarter</strong>, not harder!
                    </LiComponent>
                </UlComponent>
            </div>
        </section>
    );
}