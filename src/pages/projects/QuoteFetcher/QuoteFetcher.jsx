import './QuoteFetcher.css';
import '../Project.css';
import { useState, useEffect } from 'react';

export default function QuoteFetcher() {
    const api_url = "https://inspo-quotes-api.herokuapp.com/quotes/random";

    const [quote, setQuote] = useState({ text: "", author: "" });
    const [fade, setFade] = useState(false);

    useEffect(() => { getRandomQuote(0) }, [])

    async function getRandomQuote(delay) {
        setFade(false);
        setTimeout(async () => {
            const response = await fetch(api_url);
            const data = await response.json();
            const quote = data.quote;
            setQuote(quote);
            setFade(true);
        }, delay)
    }

    return (
        <div className="project-body">
            <div className='pt-5 d-flex flex-column justify-content-center align-items-center'>
                <div className="quoteBox mb-5 shadow">
                    <h3 className={`display-4 fade-in`} id="quote" style={{ opacity: fade ? 1 : 0 }}>&ldquo;{quote.text}&rdquo;</h3>
                    <p id="author" className={`fade-in`} style={{ opacity: fade ? 1 : 0 }}>- {quote.author}</p>
                </div>
                <button className='btn link-button quoteButton shadow' onClick={() => getRandomQuote(700)}>Generate Quote</button>
            </div>
        </div>

    )
}