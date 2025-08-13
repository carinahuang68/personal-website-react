import './Calendar.css';

export default function Calendar() {
    return (
        <div id="container2" className="py-4">
            <p>
                <font size="6" color='#934f4f'><strong><u>Welcome to my Schedule Finder!</u></strong></font>
            </p>
            <p><strong>Enter a date below</strong></p>
            Month:
            <select name="Month" id="monthInput">
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
            </select>
            Day:
            <input type="text" id="dayInput" maxLength="2" size="2" />
            <br />
            <div className="my-4">
                <button id="enter" className="btn btn-warning">Enter</button>
            </div>
            <p id="output">A message will appear here.</p>
        </div>
    )
}