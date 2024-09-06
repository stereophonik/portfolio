export default interface ValueProfileInterface {
    section: {
        id: any;
        style: { overflow: any; width: any; backgroundColor: any; color: any; textAlign: any; height: any }
    };
    div: { id: any; className: any; content: any };
    image: { id: any; src: any; alt: any; style: any; width: any; height: any };
    h1: { id: any; content: any; className: string; style: { fontSize: any } };
    h2: { id: any; content: any; className: string; style: { fontSize: any } };
}