export default interface ValueIntroInterface {
    section: {
        id: any;
        className: any;
    };
    h1: { className: string; id: any; content: any };
    h2: { className: string; id: any; content: any };
    ul: { id: any; className: any; };
    lis: { className: any; key: any; content: any; }[];
}