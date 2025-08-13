import './CustomList.css'

export default function CustomList() {
    return (
        <main id = "todoContainer">
            <div id="todo" class="">
                <h1 class="pb-2">List</h1>
                <ul>
                </ul>
                <form action="/action">
                    <input type="text" id="input" />
                    <button id="add">Add</button>
                </form>
                <p id="message"></p>
            </div>
        </main>

    )
}