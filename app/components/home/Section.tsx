import { useContext } from "react";

import SectionComponent from "../Section";
import ImgComponent from "../Img";
import DivComponent from "../Div";
import H1Component from "../H1";
import SpanComponent from "../Span";
import H2Component from "../H2";
import ButtonComponent from "../Button";

import { HomeContext } from "../../contexts/Home";

export default function SectionHomeComponent(): React.ReactElement {
    const homeContext: {} = useContext(HomeContext);

    return (
        <SectionComponent
            id={homeContext["section"]["id"]}
            className={homeContext["section"]["className"]}>
            <ImgComponent
                id={homeContext["img"]["id"]}
                className={homeContext["img"]["className"]}
                src={homeContext["img"]["src"]}
                alt={homeContext["img"]["alt"]}
            />
            <DivComponent
                id={homeContext["div"]["id"]}
                className={homeContext["div"]["className"]}>
                <H1Component
                    id={homeContext["h1"]["id"]}
                    className={homeContext["h1"]["className"]}>
                    <SpanComponent
                        id={homeContext["zySpan"]["id"]}
                        className={homeContext["zySpan"]["className"]}>
                        {homeContext["zySpan"]["content"]}
                    </SpanComponent>
                    <SpanComponent
                        id={homeContext["zzSpan"]["id"]}
                        className={homeContext["zzSpan"]["className"]}>
                        {homeContext["zzSpan"]["content"]}
                    </SpanComponent>
                </H1Component>
                <SpanComponent
                    id={homeContext["aaSpan"]["id"]}
                    className={homeContext["aaSpan"]["className"]}>
                    {homeContext["aaSpan"]["content"]}
                </SpanComponent>
                <H2Component
                    id={homeContext["aaH2"]["id"]}
                    className={homeContext["aaH2"]["className"]}>
                    {homeContext["aaH2"]["content"]}
                </H2Component>
                <H2Component
                    id={homeContext["abH2"]["id"]}
                    className={homeContext["abH2"]["className"]}>
                    {homeContext["abH2"]["content"]}
                </H2Component>
                <ButtonComponent
                    id={homeContext["button"]["id"]}
                    className={homeContext["button"]["className"]}
                    onClick={() => window.open(
                        homeContext["openWindow"]["url"],
                        homeContext["openWindow"]["target"])}>
                    {homeContext["button"]["content"]}
                </ButtonComponent>
            </DivComponent>
        </SectionComponent>
    );
}