export default interface ValueAboutInterface {
    intro: {
        div: { style: any; id: any; content: any };
        h2s: { className: string; style: { fontSize: any }; id: any; content: any }[];
        h1: { className: string; style: { fontSize: any }; id: any; content: any };
        section: {
            style: {
                backgroundColor: any;
                overflow: any;
                color: any;
                borderRadius: any;
                textAlign: any;
                width: any;
                height: any
            };
            id: any
        }
    };
    outro: {
        div: { style: any; id: any; content: any };
        h1: { className: string; style: { fontSize: any }; id: any; content: any };
        section: {
            style: { backgroundColor: any; overflow: any; color: any; textAlign: any; width: any; height: any };
            id: any
        };
        h2: { className: string; style: { fontSize: any }; id: any; content: any }
    };
    section: { id: any; style: any };
    main: {
        skills: {
            div: { style: any; id: any; content: any };
            ul: { id: any; className: any };
            lis: { style: any; key: any; content: any }[];
            h1: { className: string; style: { fontSize: any }; id: any; content: any };
            section: {
                style: {
                    backgroundColor: any;
                    overflow: any;
                    color: any;
                    borderRadius: any;
                    textAlign: any;
                    width: any;
                    height: any
                };
                id: any
            };
            h2: { className: string; style: { fontSize: any }; id: any };
            links: { href: string; content: any }[]
        };
        servings: {
            div: { style: any; id: any; content: any };
            ul: { id: any; className: any };
            lis: { style: any; key: any; content: any }[];
            h1: { className: string; style: { fontSize: any }; id: any; content: any };
            section: {
                style: {
                    backgroundColor: any;
                    overflow: any;
                    color: any;
                    textAlign: any;
                    width: any;
                    height: any
                };
                id: any
            };
            h2: { className: string; style: { fontSize: any }; id: any }
        };
        section: { style: any; id: any }
    }
}