import './MagicEightBall.css';

export default function MagicEightBall() {
    return (
        <div id="container3" className="p-5">
            <p><strong>
                <font color="black" size="6">&#x1f52e;Magic 8 Ball&#x1f52e;</font>
            </strong></p>
            <p><i>
                <font size="4">“Step into the realm of uncertainty and let the mystical powers of the <br />Magic 8 Ball
                    unveil the answers you seek with a simple click!”</font>
            </i></p>
            <div id="zain-text">
                <form action="" id="questionForm">
                    <label htmlFor="question">Ask a question: </label>
                    <input type="text" name="question" />
                    <button id="btn" className="mt-4">Enter</button>
                </form>
                <p id="answer" className="mt-4"></p>
            </div>
        </div>
    )
}