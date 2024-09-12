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
                {
                    navigationContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className={li["className"]}
                            key={li["key"]}>
                            <AComponent
                                href={navigationContext["as"][navigationContext["lis"].indexOf(li)]["href"]}
                                target="_self">
                                {navigationContext["as"][navigationContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
                <LiComponent
                    className="classNameHorizontalLi"
                    key="5">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="classNameIconHorizontalLi"
                    key="6">
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
                    key="7">
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