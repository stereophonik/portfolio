import { createContext } from "react";

export const LetsConnectContext: React.Context<{}> = createContext({
    value: {
        section: {
            id: "defaultValue",
            className: "defaultValue"
        },
        h1: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        aaSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        abSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        h2: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        a: {
            href: "defaultValue",
            content: "defaultValue"
        },
        button: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        openWindow: {
            url: "defaultValue",
            target: "defaultValue"
        }
    }
});