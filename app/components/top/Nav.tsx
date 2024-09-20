import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";

import { TopContext } from "../../contexts/Top";

export default function NavTopComponent(): React.ReactElement {
    const topContext: {} = useContext(TopContext);

    return (
        <NavComponent
            id={topContext["nav"]["id"]}
            className={topContext["nav"]["className"]}>
            <AComponent
                href={topContext["a"]["href"]}
                target={topContext["a"]["target"]}>
                <ImgComponent
                    id={topContext["img"]["id"]}
                    className={topContext["img"]["className"]}
                    src={topContext["img"]["src"]}
                    alt={topContext["img"]["alt"]}
                />
            </AComponent>
            <UlComponent
                id={topContext["ul"]["id"]}
                className={topContext["ul"]["className"]}>
                <LiComponent
                    className={topContext["lis"][0]["className"]}
                    keyValue={topContext["lis"][0]["key"]}>
                    <AComponent
                        href={topContext["as"][0]["href"]}
                        target={topContext["as"][0]["target"]}>
                        {topContext["as"][0]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][1]["className"]}
                    keyValue={topContext["lis"][1]["key"]}>
                    <AComponent
                        href={topContext["as"][1]["href"]}
                        target={topContext["as"][1]["target"]}>
                        {topContext["as"][1]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][2]["className"]}
                    keyValue={topContext["lis"][2]["key"]}>
                    <AComponent
                        href={topContext["as"][2]["href"]}
                        target={topContext["as"][2]["target"]}>
                        {topContext["as"][2]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][3]["className"]}
                    keyValue={topContext["lis"][3]["key"]}>
                    <AComponent
                        href={topContext["as"][3]["href"]}
                        target={topContext["as"][3]["target"]}>
                        {topContext["as"][3]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][4]["className"]}
                    keyValue={topContext["lis"][4]["key"]}>
                    <AComponent
                        href={topContext["as"][4]["href"]}
                        target={topContext["as"][4]["target"]}>
                        {topContext["as"][4]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][5]["className"]}
                    keyValue={topContext["lis"][5]["key"]}>
                    <AComponent
                        href={topContext["as"][5]["href"]}
                        target={topContext["as"][5]["target"]}>
                        {topContext["as"][5]["content"]}
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </NavComponent>
    );
}