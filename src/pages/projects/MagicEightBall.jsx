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

// let button2 = document.getElementById('questionForm');
// let output2 = document.getElementById('answer');

// function generateAnswer() {
//     let randomNumber = Math.floor(Math.random() * 8);
//     switch (randomNumber) {
//         case 0:
//             return '<font color=\"#b4fca7\">It is certain</font>';
//             break;
//         case 1:
//             return '<font color=\"#b4fca7\">It is decidely so</font>';
//             break;
//         case 2:
//             return '<font color=\"#faf9a7\">Reply hazy try again</font>';
//             break;
//         case 3:
//             return '<font color=\"#faf9a7\">Cannot predict now</font>';
//             break;
//         case 4:
//             return '<font color=\"#ffcfcf\">Do not count on it</font>';
//             break;
//         case 5:
//             return '<font color=\"#ffcfcf\">My sources say no</font>';
//             break;
//         case 6:
//             return '<font color=\"#ffcfcf\">Outlook not so good</font>';
//             break;
//         case 7:
//             return '<font color=\"#b4fca7\">Signs point to yes</font>';
//             break;
//     }
// }

// button2.addEventListener('submit', function (event) {
//     event.preventDefault();
//     output2.innerHTML = generateAnswer();
// });
