import './CustomList.css'
import { v4 as uuid } from "uuid";
import { useState } from 'react';
import CustomListForm from './CustomListForm';


export default function CustomList() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("Custom List");
    const [formIsRenamed, setFormIsRenamed] = useState(false);

    function changeTitle() {
        const newTitle = prompt("Please enter a new title for your list");
        setTitle(newTitle);
        setFormIsRenamed(true);
    }

    function addItem(input) {
        setItems((oldItems) => [...oldItems, { id: uuid(), text: input }]);
        console.log(items);
    }

    function removeItem(id) {
        setItems((oldItems) => {
            return oldItems.filter((item) => item.id !== id);
        })
    }

    return (
        <main id="todoContainer">
            <div id="todo" className="shadow px-5">
                <h1 className="py-2" onClick={changeTitle}>{title}</h1>
                <ul>
                    {items.map((item) => {
                        return <li key={item.id} onClick={() => removeItem(item.id)}>{item.text}</li>
                    })}
                </ul>
                <CustomListForm addItem={addItem} />
                {!formIsRenamed && <p id="message">Click the title to rename!</p>}
            </div>
        </main>
    )
}