import renderGroup from "./renderGroup";
import renderBooks from "./renderBooks";

const showBooks = (data) => {
    for (let type in data) {
        let category = document.createElement('div');
        category.className = "card";
        category.innerHTML = renderGroup(type);
        document.querySelector('.accordion').appendChild(category);
        console.log(`${type}:`)
        for (let book of data[type]) {
            for (let data in book) {
                console.log(`${data}:${book[data]}`)
                document.querySelector(`#${type} .card-body`).innerHTML += renderBooks(data, book[data]);
            }
            document.querySelector(`#${type} .card-body`).innerHTML += "<hr>";
        }
    }
}

export default showBooks