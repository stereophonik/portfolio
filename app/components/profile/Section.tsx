import { useContext } from "react";

import SectionComponent from "../Section";
import ImgComponent from "../Img";
import DivComponent from "../Div";
import H1Component from "../H1";
import SpanComponent from "../Span";
import StrongComponent from "../Strong";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";

import { ProfileContext } from "../../contexts/Profile";

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
                    id={profileContext["aaSpan"]["id"]}
                    className={profileContext["aaSpan"]["className"]}>
                    {profileContext["aaSpan"]["content"]}
                </SpanComponent>
                <H2Component
                    id={profileContext["h2"]["id"]}
                    className="className02H2">
                    {profileContext["h2"]["content"]}
                </H2Component>
                <UlComponent
                    id={profileContext["ul"]["id"]}
                    className={profileContext["ul"]["className"]}>
                    <LiComponent
                        className={profileContext["lis"][0]["className"]}
                        keyValue={profileContext["lis"][0]["key"]}>
                        {profileContext["lis"][0]["content"]}
                    </LiComponent>
                    <LiComponent
                        className={profileContext["lis"][1]["className"]}
                        keyValue={profileContext["lis"][1]["key"]}>
                        {profileContext["lis"][1]["content"]}
                    </LiComponent>
                    <LiComponent
                        className={profileContext["lis"][2]["className"]}
                        keyValue={profileContext["lis"][2]["key"]}>
                        <SpanComponent
                            id={profileContext["abSpan"]["id"]}
                            className={profileContext["abSpan"]["className"]}>
                            {profileContext["abSpan"]["content"]}
                        </SpanComponent>
                        <StrongComponent>
                            <SpanComponent
                                id={profileContext["acSpan"]["id"]}
                                className={profileContext["acSpan"]["className"]}>
                                {profileContext["acSpan"]["content"]}
                            </SpanComponent>
                        </StrongComponent>
                        <SpanComponent
                            id={profileContext["adSpan"]["id"]}
                            className={profileContext["adSpan"]["className"]}>
                            {profileContext["adSpan"]["content"]}
                        </SpanComponent>
                    </LiComponent>
                </UlComponent>
            </DivComponent>
        </SectionComponent>
    );
}