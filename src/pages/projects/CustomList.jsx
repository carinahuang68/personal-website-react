import './CustomList.css'
import { v4 as uuid } from "uuid";
import {useState} from 'react';

function addItem(event) {
    event.preventDefault();

}

export default function CustomList() {
    const [items, setItems] = useState([]);

    function addItem(input) {
        setItems((oldItems) => [...oldItems, {id: uuid(), text: input}]);
    }

    function removeItem(id) {
        setItems((oldItems) => {
            return oldItems.filter((item) => item.id !== id);
        })
    }

    return (
        <main id = "todoContainer">
            <div id="todo" class="">
                <h1 class="pb-2">List</h1>
                <ul>
                    {items.map((item) => {
                        <li key={item.id} onClick={() => removeItem(item.id)}>{item.input}</li>
                    })}
                </ul>
                <form onSubmit={addItem}>
                    <input type="text" id="input" />
                    <button id="add">Add</button>
                </form>
                <p id="message"></p>
            </div>
        </main>
    )
}