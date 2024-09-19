import { createContext } from "react";

export const TopContext: React.Context<{}> = createContext({
    nav: {
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
        },
        {
            className: "defaultValue",
            key: "defaultValue",
            content: "defaultValue"
        },
        {
            className: "defaultValue",
            key: "defaultValue",
            content: "defaultValue"
        },
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
        },
        {
            href: "defaultValue",
            content: "defaultValue"
        },
        {
            href: "defaultValue",
            content: "defaultValue"
        },
        {
            href: "defaultValue",
            content: "defaultValue"
        },
        {
            href: "defaultValue",
            content: "defaultValue"
        }
    ]
});