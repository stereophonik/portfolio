import { createContext } from "react";

export const BottomContext: React.Context<{}> = createContext({
    footer: {
        id: "defaultValue",
        className: "defaultValue"
    },
    ul: {
        id: "defaultValue",
        className: "defaultValue"
    },
    lis: [
        {
            className: "defaultValue",
            key: "defaultValue",
            content: "defaultValue"
        },
        {
            className: "defaultValue",
            key: "defaultValue",
            content: "defaultValue"
        }
    ],
    as: [
        {
            href: "defaultValue",
            content: "defaultValue"
        },
        {
            href: "defaultValue",
            content: "defaultValue"
        }
    ],
    imgs: [
        {
            id: "defaultValue",
            className: "defaultValue",
            src: "defaultValue",
            alt: "defaultValue"
        },
        {
            id: "defaultValue",
            className: "defaultValue",
            src: "defaultValue",
            alt: "defaultValue"
        }
    ],
    divs: [
        {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        }
    ],
    a: {
        href: "defaultValue",
        content: "defaultValue"
    }
});