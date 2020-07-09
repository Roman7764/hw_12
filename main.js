let count = 0;
function search(){
    let input = document.querySelector('input');
    if(input.value == ''){
        if(count == 0){
            let remove_main = document.querySelector('#main');
            remove_main.remove()
            let main_wrapper = document.querySelector('#main_wrapper');
            let create_main = document.createElement('main');
            create_main.innerHTML = `<div id="main"></div>`;
            main_wrapper.appendChild(create_main);
            for(i = 0; i < pizzaList.length; i++){
                let main = document.querySelector('#main');
                let card = document.createElement('card');
                card.innerHTML = `
                <div class="card">
                    <img class="image" src="img/${pizzaList[i].img}"/>
                    <h2 class="heading">${pizzaList[i].name}</h2>
                    <div class="description">${pizzaList[i].composition.join(', ')}</div>
                    <div class="price">${pizzaList[i].price}.-</div>
                    <svg class="plus" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#6A46B0"/><path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" fill="#fafafa"/></svg>
                    <div class="caloricity">${pizzaList[i].caloricity}</div>
                </div>
                `;
                main.appendChild(card);
            }
        }
        count = 1;
    }
    if(input.value !== ''){
        let remove_main = document.querySelector('#main');
        remove_main.remove()
        let main_wrapper = document.querySelector('#main_wrapper');
        let create_main = document.createElement('main');
        create_main.innerHTML = `<div id="main"></div>`;
        main_wrapper.appendChild(create_main);
        for(i = 0; i < pizzaList.length; i++){
            if(input.value.toLowerCase() == pizzaList[i].name.toLowerCase()){
                let main = document.querySelector('#main');
                let card = document.createElement('card');
                card.innerHTML = `
                <div class="card">
                    <img class="image" src="img/${pizzaList[i].img}"/>
                    <h2 class="heading">${pizzaList[i].name}</h2>
                    <div class="description">${pizzaList[i].composition.join(', ')}</div>
                    <div class="price">${pizzaList[i].price}.-</div>
                    <svg class="plus" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#6A46B0"/><path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" fill="#fafafa"/></svg>
                    <div class="caloricity">${pizzaList[i].caloricity}</div>
                </div>
                `;
                main.appendChild(card);
            }
        }
        count = 0;
    }
}
window.onload = function () {
    search()
}