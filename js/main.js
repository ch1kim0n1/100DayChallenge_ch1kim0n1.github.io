// ПОДКЛЮЧЕНИЕ СПИСОКОВ ЧЕРЕЗ DATA.JS В INDEX.HTML


const itemsContainer = document.getElementById("challenge-items");
let items = [];
let hrBlocks = [];

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0){
        let hrBlock = document.createElement("div");
        hrBlock.classList.add("hr-block");
        hrBlock.innerHTML = `<div>${i}+</div>`;

        hrBlocks.push(hrBlock);
        itemsContainer.append(hrBlock);
    }

    let item = document.createElement("a");
    item.classList.add("item");
    item.setAttribute("href", listItems[i].link);
    item.innerHTML = `
                    <div class="item-img">
                        <img src="${listItems[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h3>${listItems[i].title}</h3>
                    </div>
                    <span>${i + 1} Day</span>
    `
    items.push({
        elem: item,
        searchText: `${listItems[i].title.toLowerCase()} - ${i + 1} day`,
        day: i + 1
    });
    itemsContainer.append(item);
}

let daysSelectBtns = document.querySelectorAll("#select-days a");
daysSelectBtns.forEach(button => {
    button.addEventListener("click", function(e){
        e.preventDefault();
        let elem = e.currentTarget;

        // Если кнопка выбрана, то она активна и выделяется визуальна
        daysSelectBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        elem.classList.add("active");

        // Получение от минимального числа дня до максимального
        let min = +elem.getAttribute("min-day");
        let max = +elem.getAttribute("max-day");

        let founded = 0;
        // Поиск тех дней, что нужны
        items.forEach(item => {
            if(min <= item.day && item.day <= max)
            {
                item.elem.classList.remove("hide");
                founded++;
            }
            else{
                item.elem.classList.add("hide");
            }
            // Если выбраны все дни, то возвращаем разделительные блоки, как и было раньше
            if(min == 1 && max == 100)
                isActiveHrBlocks(true);
            else
                isActiveHrBlocks(false);

            if(founded == 0)
                isActiveNothing(true);
            else
                isActiveNothing(false);
        });
    })
});
// Включить / Выключить разделительные блоки
function isActiveHrBlocks(isActive){
    if(isActive){
        hrBlocks.forEach(element => {
            element.classList.remove("hide");
        });
    }
    else{
        hrBlocks.forEach(element => {
            element.classList.add("hide");
        });
    }
}

// Активировать текст, если ничего не найдено
let nothing = document.getElementById("nothing-text");
nothing.textContent = `Unfortunately we didn't find anything. Most likely, you entered an invalid request or I have not completed this task yet (the maximum completed day is ${items.length})`
function isActiveNothing(isActive){
    if(isActive)
        nothing.classList.remove("hide");
    else
        nothing.classList.add("hide");
}