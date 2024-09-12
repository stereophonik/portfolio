import { useContext } from "react";

import { ProfileContext } from "../../contexts/Profile";
import SectionComponent from "../Section";
import ImgComponent from "../Img";
import DivComponent from "../Div";
import H1Component from "../H1";
import SpanComponent from "../Span";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";

export default function SectionProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);

    return (
        <SectionComponent
            id={profileContext["section"]["id"]}
            className={profileContext["section"]["className"]}>
            <ImgComponent
                id={profileContext["img"]["id"]}
                className={profileContext["img"]["className"]}
                src={profileContext["img"]["src"]}
                alt={profileContext["img"]["alt"]}
            />
            <DivComponent
                id={profileContext["div"]["id"]}
                className={profileContext["div"]["className"]}>
                <H1Component
                    id={profileContext["h1"]["id"]}
                    className={profileContext["h1"]["className"]}>
                    {profileContext["h1"]["content"]}
                </H1Component>
                <SpanComponent
                    id={profileContext["span"]["id"]}
                    className={profileContext["span"]["className"]}>
                    {profileContext["span"]["content"]}
                </SpanComponent>
                <H2Component
                    id={profileContext["h2"]["id"]}
                    className="className02H2">
                    {profileContext["h2"]["content"]}
                </H2Component>
                <UlComponent
                    id={profileContext["ul"]["id"]}
                    className={profileContext["ul"]["className"]}>
                    {
                        profileContext["lis"].map((li: { [x: string]: any; }) =>
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
            </DivComponent>
        </SectionComponent>
    );
}