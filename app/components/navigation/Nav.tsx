import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";

import { NavigationContext } from "../../contexts/Navigation";

export default function NavNavigationComponent(): React.ReactElement {
    const navigationContext: {} = useContext(NavigationContext);

    return (
        <NavComponent
            id={navigationContext["nav"]["id"]}
            className={navigationContext["nav"]["className"]}>
            <UlComponent
                id={navigationContext["ul"]["id"]}
                className={navigationContext["ul"]["className"]}>
                <LiComponent
                    className={navigationContext["lis"][0]["className"]}
                    key={navigationContext["lis"][0]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][0])]["href"]}
                        target="_self">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][0])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][1]["className"]}
                    key={navigationContext["lis"][1]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][1])]["href"]}
                        target="_self">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][1])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][2]["className"]}
                    key={navigationContext["lis"][2]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][2])]["href"]}
                        target="_self">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][2])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][3]["className"]}
                    key={navigationContext["lis"][3]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][3])]["href"]}
                        target="_self">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][3])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][4]["className"]}
                    key={navigationContext["lis"][4]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][4])]["href"]}
                        target="_self">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][4])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="classNameHorizontalLi"
                    key="6">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="classNameIconHorizontalLi"
                    key="7">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio"
                        target="_blank">
                        <ImgComponent
                            id="idAaImageNavigation"
                            className="className02Image"
                            src="/github.png"
                            alt="Github PNG" />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="classNameIconHorizontalLi"
                    key="8">
                    <AComponent
                        href="https://www.linkedin.com/in/nikolai-reyes"
                        target="_blank">
                        <ImgComponent
                            id="idAbImageNavigation"
                            className="className02Image"
                            src="/linkedin.png"
                            alt="LinkedIn PNG" />
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </NavComponent>
    );
}