import { createContext } from "react";

export const HomeContext: React.Context<{}> = createContext({
    value: {
        section: {
            id: "defaultValue",
            className: "defaultValue"
        },
        img: {
            id: "defaultValue",
            className: "defaultValue",
            src: "defaultValue",
            alt: "defaultValue"
        },
        div: {
            id: "defaultValue",
            className: "defaultValue"
        },
        h1: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        zySpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        zzSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        aaSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        aaH2: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        abH2: {
            id: "defaultValue",
            className: "defaultValue",
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