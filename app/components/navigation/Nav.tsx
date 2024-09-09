import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import LinkComponent from "../Link";

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
                            <LinkComponent
                                href={navigationContext["links"][navigationContext["lis"].indexOf(li)]["href"]}>
                                {navigationContext["links"][navigationContext["lis"].indexOf(li)]["content"]}
                            </LinkComponent>
                        </LiComponent>
                    )
                }
            </UlComponent>
        </NavComponent>
    );
}