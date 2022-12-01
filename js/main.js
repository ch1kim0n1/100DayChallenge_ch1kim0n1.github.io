// ПОДКЛЮЧЕНИЕ СПИСОКОВ ЧЕРЕЗ DATA.JS В INDEX.HTML
let ch1kim0n1 = getDatach1kim0n1();
let otherUsers = ch1kim0n1.otherUsers;
let listTitles = ch1kim0n1.listTitles;
let listItems = ch1kim0n1.listItems;


let usersContent = document.getElementById("other-users");
otherUsers.forEach(user => {
    usersContent.innerHTML += `
    <a href="${user.url}" target="_blank" class="user ${user.status}">
        <div class="user-img">
            <img src="${user.image}" alt="${user.nickname}">
        </div>
        <div class="user-nickname">
            ${user.nickname}
        </div>
    </a>
    `;
});

const itemsContainer = document.getElementById("challenge-items");
let items = [];
let hrBlocks = [];

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0 && i != 0){
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
        day: i + 1,
        contentIDs: listItems[i].content
    });
    itemsContainer.append(item);
}

// Поиск в реальном времени
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function(e){

    // Отключить кнопки-сортировки
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });
    daysSelectBtns[0].classList.add("selected");

    // Поиск
    let value = e.currentTarget.value.toLowerCase();
    if(value == "")
    {
        items.forEach(element => {
            element.elem.classList.remove("hide");
        });
        isActiveHrBlocks(true);
        isActiveNothing(false);
        return;
    }
    isActiveHrBlocks(false);

    let founded = 0;
    items.forEach(element => {
        if(element.searchText.includes(value)){
            element.elem.classList.remove("hide");
            founded++;
        }
        else{
            element.elem.classList.add("hide");
        }
    });
    if(founded == 0)
        isActiveNothing(true);
    else
        isActiveNothing(false);
});


// Кнопки-сортировки по дням
let daysSelectBtns = document.querySelectorAll("#select-days .select");
daysSelectBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        let elem = e.currentTarget;

        // Если кнопка выбрана, то она активна и выделяется визуальна
        daysSelectBtns.forEach(btn => {
            btn.classList.remove("selected");
        });
        elem.classList.add("selected");


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
        });
        if(founded == 0)
            isActiveNothing(true);
        else
            isActiveNothing(false);
    });
});

// Статистика по тайтлам
//////////////////////////////////////////////////////
// Сбор данных со всех списков
let allTitlesCount = 0;
listItems.forEach(item => {
    if(item.content != undefined){
        item.content.forEach(id => {
            listTitles[id].count += 1;
            allTitlesCount += 1;
        });
    }
});

// Сортировка
listTitles.sort(compareTitlesCount);
function compareTitlesCount(title1, title2) {
    if(title1.count > title2.count){
        return -1;
    }
    if(title1.count < title2.count){
        return 1;
    }
    return 0;
}

// Рисунок графика и к нему текста
let statsGraphElem = document.getElementById("stats-number__graph");
let statsGraphText = document.getElementById("stats-number__text");

listSort = [
    {
        index: 0,
        color: "#f85050"
    },
    {
        index: 1,
        color: "#85ff76"
    },
    {
        index: 2,
        color: "#3b59ff"
    },
    {
        index: 3,
        color: "#6300b3"
    },
    {
        index: 4,
        color: "#900011"
    }
]
let procLeft = 100;
listSort.forEach(element => {
    let proc = listTitles[element.index].count * 100 / allTitlesCount;
    procLeft -= proc;

    // Создание основных тайтлов, главная 4-ка популярных
    elemTextStat(listTitles[element.index].title, element.color, proc, function(e){
        showItemsWithTitle(listTitles[element.index].id);
    });
    // Отметить тайтл уже как видимый для пользователя в статистике
    listTitles[element.index].isShowing = true;
});
// Кнопка "Другие", которая при клике показывает все тайтлы
elemTextStat("Others", "#5c5c5c", procLeft, function(e){
    listTitles.forEach(element => {
        // Если элемент ещё не показан, значит его показывать после клика в статистике
        if(element.isShowing == false){
            // Опять высчитываем проценты
            let proc = element.count * 100 / allTitlesCount;
            // Создаём кнопку с теми же функциями, что и основную
            elemTextStat(element.title, "#5c5c5c", proc, function(e){
                showItemsWithTitle(element.id);
                element.isShowing = true;
            });
        }
    });

    // Удалить кнопку "Others", т.к. она уже не нужна
    e.currentTarget.remove();
});

// Показать в списке вопросов дня только те, что содержат индекс тайтла
function showItemsWithTitle(indexTitle){
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });
    isActiveNothing(false);
    isActiveHrBlocks(false);
    for(let i = 0; i < items.length; i++){
        if(items[i].contentIDs != undefined){
            if(items[i].contentIDs.includes(indexTitle)){
                items[i].elem.classList.remove("hide");
            } else{
                items[i].elem.classList.add("hide");
            }

        } else{
            items[i].elem.classList.add("hide");
        }
    }
}
// Создать элемент с тайтлом в статистике
function elemTextStat(name, color, proc, funcClick) {
    statsGraphElem.innerHTML += `<span style="background: ${color}; width: ${proc}%"></span>`
    let elem = document.createElement("div");
    elem.classList.add("item-stat");
    elem.innerHTML = `<span style="background: ${color}"></span><div class="text">${proc.toFixed(1)}% — ${name}</div>`;

    elem.addEventListener("click", funcClick);

    statsGraphText.append(elem);
}

//////////////////////////////////////////////////////

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