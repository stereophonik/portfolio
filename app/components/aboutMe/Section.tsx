import { useContext } from "react";

import SectionComponent from "../Section";
import ImgComponent from "../Img";
import DivComponent from "../Div";
import H1Component from "../H1";
import SpanComponent from "../Span";
import StrongComponent from "../Strong";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import ButtonComponent from "../Button";

import { AboutMeContext } from "../../contexts/AboutMe";

export default function SectionAboutMeComponent(): React.ReactElement {
    const aboutMeContext: {} = useContext(AboutMeContext);

    return (
        <SectionComponent
            id={aboutMeContext["section"]["id"]}
            className={aboutMeContext["section"]["className"]}>
            <DivComponent
                id={aboutMeContext["div"]["id"]}
                className={aboutMeContext["div"]["className"]}>
                <H1Component
                    id={aboutMeContext["h1"]["id"]}
                    className={aboutMeContext["h1"]["className"]}>
                    <SpanComponent
                        id={aboutMeContext["zySpan"]["id"]}
                        className={aboutMeContext["zySpan"]["className"]}>
                        {aboutMeContext["zySpan"]["content"]}
                    </SpanComponent>
                    <SpanComponent
                        id={aboutMeContext["zzSpan"]["id"]}
                        className={aboutMeContext["zzSpan"]["className"]}>
                        {aboutMeContext["zzSpan"]["content"]}
                    </SpanComponent>
                </H1Component>
                <UlComponent
                    id={aboutMeContext["ul"]["id"]}
                    className={aboutMeContext["ul"]["className"]}>
                    <LiComponent
                        className={aboutMeContext["lis"][1]["className"]}
                        keyValue={aboutMeContext["lis"][1]["key"]}>
                        {aboutMeContext["lis"][1]["content"]}
                    </LiComponent>
                    <LiComponent
                        className={aboutMeContext["lis"][2]["className"]}
                        keyValue={aboutMeContext["lis"][2]["key"]}>
                        <SpanComponent
                            id={aboutMeContext["abSpan"]["id"]}
                            className={aboutMeContext["abSpan"]["className"]}>
                            {aboutMeContext["abSpan"]["content"]}
                        </SpanComponent>
                        <StrongComponent>
                            <SpanComponent
                                id={aboutMeContext["acSpan"]["id"]}
                                className={aboutMeContext["acSpan"]["className"]}>
                                {aboutMeContext["acSpan"]["content"]}
                            </SpanComponent>
                        </StrongComponent>
                        <SpanComponent
                            id={aboutMeContext["adSpan"]["id"]}
                            className={aboutMeContext["adSpan"]["className"]}>
                            {aboutMeContext["adSpan"]["content"]}
                        </SpanComponent>
                    </LiComponent>
                </UlComponent>
                <ButtonComponent
                    id={aboutMeContext["button"]["id"]}
                    className={aboutMeContext["button"]["className"]}
                    onClick={() => window.open(
                        aboutMeContext["openWindow"]["url"],
                        aboutMeContext["openWindow"]["target"])}>
                    {aboutMeContext["button"]["content"]}
                </ButtonComponent>
            </DivComponent>
            <ImgComponent
                id={aboutMeContext["img"]["id"]}
                className={aboutMeContext["img"]["className"]}
                src={aboutMeContext["img"]["src"]}
                alt={aboutMeContext["img"]["alt"]}
            />
        </SectionComponent>
    );
}