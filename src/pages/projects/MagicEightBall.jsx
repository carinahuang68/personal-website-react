import './MagicEightBall.css';
import {useState} from 'react';

export default function MagicEightBall() {
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState("");
    const [color, setColor] = useState("black");

    function updateAnswer(e) {
        e.preventDefault();
        const answer = generateAnswer();
        setAnswer(answer.text);
        setColor(answer.color);
        setInput("");
    }
    
    function updateInput(e) {
        setInput(e.target.value);
    }

    return (
        <div id="container3" className="p-5 shadow-lg">
            <h2 class="pink-outline"><strong>
                <font color="black"><span id="ball">&#x1f52e;</span>Magic 8 Ball&#x1f52e;</font>
            </strong></h2>
            <p class="pink-outline"><i>
                <font size="4">“Step into the realm of uncertainty and let the mystical powers of the <br />Magic 8 Ball
                    unveil the answers you seek with a simple click!”</font>
            </i></p>
            <div id="zain-text">
                <form action="" id="questionForm" onSubmit={updateAnswer}>
                    <label htmlFor="question">Ask a question: </label>
                    <input type="text" name="question" value={input} onChange={updateInput}/>
                    <button className="btn btn-light">Enter</button>
                </form>
                <p id="answer" className="mt-4" style={{color}}>{answer}</p>
            </div>
        </div>
    )
}

function generateAnswer() {
    let randomNumber = Math.floor(Math.random() * 8);
    const answers = [
        { 
            color: "#b4fca7",
            text: "It is certain"
        },
        { 
            color: "#b4fca7",
            text: "It is decidely so"
        },
        { 
            color: "#faf9a7",
            text: "Reply hazy try again"
        },
        { 
            color: "#faf9a7",
            text: "Cannot predict now"
        },
        { 
            color: "#ffcfcf",
            text: "Do not count on it"
        },
        { 
            color: "#ffcfcf",
            text: "My sources says no"
        },
        { 
            color: "#ffcfcf",
            text: "Outlook not so good"
        },
        { 
            color: "#b4fca7",
            text: "Signs point to yes"
        },
    ];

    return answers[randomNumber];
}

