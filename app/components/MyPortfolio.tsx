import { useContext } from "react";
import { MyPortfolioContext } from "../contexts/MyPortfolio";

export default function MyPortfolioComponent(): React.ReactElement {
    const myPortfolioContext: {} = useContext(MyPortfolioContext);

    return (
        <section
            id={myPortfolioContext["section"]["id"]}
            className={myPortfolioContext["section"]["className"]}>
            <h1
                id={myPortfolioContext["h1"]["id"]}
                className={myPortfolioContext["h1"]["className"]}>
                <span
                    id={myPortfolioContext["aaSpan"]["id"]}
                    className={myPortfolioContext["aaSpan"]["className"]}>
                    {myPortfolioContext["aaSpan"]["content"]}
                </span>
                <span
                    id={myPortfolioContext["abSpan"]["id"]}
                    className={myPortfolioContext["abSpan"]["className"]}>
                    {myPortfolioContext["abSpan"]["content"]}
                </span>
            </h1>
            <h2
                id={myPortfolioContext["aaH2"]["id"]}
                className={myPortfolioContext["aaH2"]["className"]}>
                {myPortfolioContext["aaH2"]["content"]}
            </h2>
            <span
                id={myPortfolioContext["acSpan"]["id"]}
                className={myPortfolioContext["acSpan"]["className"]}>
                <iframe
                    id="idIframeMyPortfolio"
                    className="classNameIframe"
                    src={myPortfolioContext["aaA"]["href"]}>
                </iframe>
            </span>
            <h2
                id={myPortfolioContext["abH2"]["id"]}
                className={myPortfolioContext["abH2"]["className"]}>
                {myPortfolioContext["abH2"]["content"]}
            </h2>
            <span
                id={myPortfolioContext["adSpan"]["id"]}
                className={myPortfolioContext["adSpan"]["className"]}>
                <a
                    href={myPortfolioContext["abA"]["href"]}
                    target={myPortfolioContext["abA"]["target"]}>
                    {myPortfolioContext["abA"]["content"]}
                </a>
            </span>
        </section>
    );
}