
import './CustomList.css';
import {useState} from 'react';

export default function CustomListForm({addItem}) {
    const [input, setInput] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

    function handleChange(e) {
        setInput(e.target.value);
        if (e.target.value === "") {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input) {
            addItem(input);
            setInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="input" name="input" value={input} onChange={handleChange} className="mr-2" />
            <button id="addButton" className='px-4 btn' disabled={isEmpty}>Add</button>
        </form>
    )
}