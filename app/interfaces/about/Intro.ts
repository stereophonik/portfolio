export default interface IntroAboutInterface {
    section: {
        id: any;
        style: {
            overflow: any;
            width: any;
            backgroundColor: any;
            color: any;
            textAlign: any;
            borderRadius: any;
            height: any;
        };
    };
    div: {
        id: any;
        style: any;
        content: any;
    };
    h1: {
        className: string;
        style: {
            fontSize: any;
        };
        id: any;
        content: any;
    };
    h2s: (
            {
                id: any;
                content: any;
                className: string;
                style: {
                    fontSize: any
                };
            }
        )[];
}