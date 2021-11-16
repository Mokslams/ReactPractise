const consoleItems = (data)=>{
    // const ul = document.createElement('ul'); //sukuriam ul
    // document.querySelector('.container').appendChild(ul) //ul idedam i kontainer
    for (let item of data){
        for(let property in item){
            let div = document.querySelector('.card-body');
            div.textContent = `Kodas:${property}-Reikšmė:"${item[property]}`;
            document.querySelector('.card-body').appendChild(div)
        }
    }
}

export default consoleItems