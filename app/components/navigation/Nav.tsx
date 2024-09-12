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
                    className={navigationContext["lis"][5]["className"]}
                    key={navigationContext["lis"][5]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][5])]["href"]}
                        target="_blank">
                        {navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][5])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][6]["className"]}
                    key={navigationContext["lis"][6]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][6])]["href"]}
                        target="_blank">
                        <ImgComponent
                            id="idAaImgNavigation"
                            className="className02Img"
                            src="/github.png"
                            alt="Github PNG" />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][7]["className"]}
                    key={navigationContext["lis"][7]["key"]}>
                    <AComponent
                        href={navigationContext["as"][navigationContext["lis"].indexOf(navigationContext["lis"][7])]["href"]}
                        target="_blank">
                        <ImgComponent
                            id="idAbImgNavigation"
                            className="className02Img"
                            src="/linkedin.png"
                            alt="LinkedIn PNG" />
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </NavComponent>
    );
}