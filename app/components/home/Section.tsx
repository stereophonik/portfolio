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
                    id={homeContext["h2"]["id"]}
                    className="className02H2">
                    {homeContext["h2"]["content"]}
                </H2Component>
                <UlComponent
                    id={homeContext["ul"]["id"]}
                    className={homeContext["ul"]["className"]}>
                    <LiComponent
                        className={homeContext["lis"][0]["className"]}
                        keyValue={homeContext["lis"][0]["key"]}>
                        {homeContext["lis"][0]["content"]}
                    </LiComponent>
                    <LiComponent
                        className={homeContext["lis"][1]["className"]}
                        keyValue={homeContext["lis"][1]["key"]}>
                        {homeContext["lis"][1]["content"]}
                    </LiComponent>
                    <LiComponent
                        className={homeContext["lis"][2]["className"]}
                        keyValue={homeContext["lis"][2]["key"]}>
                        <SpanComponent
                            id={homeContext["abSpan"]["id"]}
                            className={homeContext["abSpan"]["className"]}>
                            {homeContext["abSpan"]["content"]}
                        </SpanComponent>
                        <StrongComponent>
                            <SpanComponent
                                id={homeContext["acSpan"]["id"]}
                                className={homeContext["acSpan"]["className"]}>
                                {homeContext["acSpan"]["content"]}
                            </SpanComponent>
                        </StrongComponent>
                        <SpanComponent
                            id={homeContext["adSpan"]["id"]}
                            className={homeContext["adSpan"]["className"]}>
                            {homeContext["adSpan"]["content"]}
                        </SpanComponent>
                    </LiComponent>
                </UlComponent>
            </DivComponent>
        </SectionComponent>
    );
}