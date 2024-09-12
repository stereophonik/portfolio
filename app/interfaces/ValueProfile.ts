export default interface ValueProfileInterface {
    section: { id: any; className: any; };
    img: { id: any; className: any; src: any; alt: any; };
    h1: { id: any; className: string; content: any; };
    span: { id: any; className: string; content: any; };
    h2: { id: any; className: string; content: any; };
    ul: { id: any; className: any; };
    lis: { className: any; key: any; content: any; }[];
}