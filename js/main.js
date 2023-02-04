// ПОДКЛЮЧЕНИЕ СПИСОКОВ ЧЕРЕЗ DATA.JS В INDEX.HTML
let ch1kim0n1 = getDatach1kim0n1();
let otherUsers = ch1kim0n1.otherUsers;
let listTitles = ch1kim0n1.listTitles;
let listItems = ch1kim0n1.listItems;

// Добавление сторонних пользователей
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

function createItem(questionItem) {
    let item = document.createElement("a");
    item.classList.add("item");
    item.setAttribute("href", questionItem.question.link);

    let difficultyText = "none";
    switch (questionItem.question.difficulty) {
        case 3:
            difficultyText = "Hard question"
            break;
        case 2:
            difficultyText = "Medium question"
            break;
        case 1:
            difficultyText = "Easy question"
            break;
        default:
            difficultyText = "None"
            break;
    }

    item.innerHTML = `
                    <div class="item-img">
                        <img src="${questionItem.question.image}" alt="">
                    </div>
                    <div class="info">
                        <div class="tag-stats">
                            <span class="likes">${questionItem.question.likes}</span>
                            <span class="difficulty difficulty-${questionItem.question
                            .difficulty}">${difficultyText}</span>
                        </div>
                        <h3>${questionItem.question.title}</h3>
                    </div>
                    <span class="big-day">${questionItem.day} Day</span>
    `;
    itemsContainer.append(item);
}
function clearItems() {
    itemsContainer.innerHTML = "";
    isScrollLoading = false;
}

// Добавление массива вопросов и дней
for (let i = 0; i < listItems.length; i++) {
    let sortTagsText = "";
    if (listItems[i].addSortTag != undefined)
        sortTagsText += listItems[i].addSortTag;

    let sortTitleText = "";
    if (listItems[i].content != undefined) {
        listItems[i].content.forEach(titleID => {
            sortTitleText += listTitles[titleID].title + ", ";
        });
    }
    sortTitleText = sortTitleText.toLowerCase();

    items.push({
        question: listItems[i],
        searchText: `${listItems[i].title.toLowerCase()} - ${i + 1} day - ${sortTagsText} - ${sortTitleText}`,
        day: i + 1,
        contentIDs: listItems[i].content
    });
}

// Будет загружать каждые 20
const scrollLoadingCount = 20;
// Сколько в данный момент максимум
let scrollLoadingMax = scrollLoadingCount;
// Сколько в данный момент загружено
let scrollLoadingCurrent = 0;
// Работает ли сейчас загрузка? Есть возможность дальше загружать?
let isScrollLoading = true;
// Цикл загрузки предметов от и до
function loadingItems() {
    

    for (let i = scrollLoadingCurrent; i < scrollLoadingMax; i++) {
        if((scrollLoadingCurrent % 10) == 0 && scrollLoadingCurrent != 0){
            let hrBlock = document.createElement("div");
            hrBlock.classList.add("hr-block");
            hrBlock.innerHTML = `<div>${scrollLoadingCurrent}+</div>`;
    
            hrBlocks.push(hrBlock);
            itemsContainer.append(hrBlock);
        }

        if (items.length - 1 < i) {
            isScrollLoading = false;
            break;
        }
        scrollLoadingCurrent++;
        createItem(items[i]);
    }
    scrollLoadingMax += scrollLoadingCount;
}
// ВЫполнить функцию Загрузка предметов от 1 до 100
function allItemsLoad() {
    scrollLoadingMax = scrollLoadingCount;
    scrollLoadingCurrent = 0;
    isScrollLoading = true;
    
    loadingItems();
}
// Событие загрузки по скроллу, когда скролл от конца меньше 200 пикс.
window.addEventListener("scroll", function (e) {
    if (isScrollLoading) {
        let htmlHeight = document.documentElement.offsetHeight;
        let pageYOffsetBottom = window.pageYOffset + window.innerHeight;

        if (htmlHeight - pageYOffsetBottom < 200) {
            loadingItems();

        }
    }
});

allItemsLoad();

// Поиск в реальном времени
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function (e) {

    // Отключить кнопки-сортировки
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });

    clearItems();
    // Поиск
    let value = e.currentTarget.value.toLowerCase();
    if (value == "") {
        allItemsLoad();
        isActiveNothing(false);
        resetDaysSelectDisplay();

        return;
    }

    let founded = 0;
    items.forEach(element => {
        if (element.searchText.includes(value)) {
            createItem(element);
            founded++;
        }
    });
    if (founded == 0)
        isActiveNothing(true);
    else
        isActiveNothing(false);
});

// Кнопки, где только один выбранный элемент
let groupSelectOrdinary = document.querySelectorAll(".select-ordinary");
groupSelectOrdinary.forEach(group => {
    let btns = group.querySelectorAll(".select");

    btns.forEach(btn => {
        btn.addEventListener("click", function(e){
            // Если кнопка выбрана, то она активна и выделяется визуальна
            btns.forEach(btn => {
                btn.classList.remove("selected");
            });
            btn.classList.add("selected");
        })
    });
});


// Кнопки-сортировки по дням
let daysSelectBtns = document.querySelectorAll("#select-days .select");
daysSelectBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        let elem = e.currentTarget;


        // Получение от минимального числа дня до максимального
        let min = +elem.getAttribute("min-day");
        let max = +elem.getAttribute("max-day");

        let founded = 0;

        // Поиск тех дней, что нужны
        clearItems();
        for(let i = 0; i < items.length; i++){
            if(min == 1 && max == 100){
                founded++;
                allItemsLoad();
                break;
            }
            if(items[i].day > max)
                continue;
            if(items[i].day < min)
                continue;

            createItem(items[i]);
            founded++;
        }

        if (founded == 0)
            isActiveNothing(true);
        else
            isActiveNothing(false);
    });
});
function resetDaysSelectDisplay(){
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });
    daysSelectBtns[0].classList.add("selected");
}

// Кнопки тегов
let tagsSelectBtns = document.querySelectorAll("#show-tags-type .select");
tagsSelectBtns.forEach(btn => {
    // Класс, который будет установлен на элемент со всеми днями, чтобы по CSS скрывать нужные теги
    let hideClass = btn.getAttribute("hide-class");

    btn.addEventListener("click", function(e){
        btn.classList.toggle("selected");
        itemsContainer.classList.toggle(hideClass);
    });
});

// Кнопки по сортировке списка
let sortBtns = document.querySelectorAll("#select-type-sort .select");
sortBtns.forEach(btn => {
    let typeSort = btn.getAttribute("type-sort");
    
    btn.addEventListener("click", function(e){
        switch (typeSort) {
            case "days":
                items.sort((a, b) => a.day - b.day);
                isHrActive(true);
                break;
            case "likes":
                items.sort((a, b) => b.question.likes - a.question.likes);
                isHrActive(false);
                break;
            case "difficulty":
                items.sort((a, b) => b.question.difficulty - a.question.difficulty);
                isHrActive(false);
                break;
            default:
                break;
        }
        resetDaysSelectDisplay();
        clearItems();
        allItemsLoad();
    });
    
});

// Статистика по тайтлам
//////////////////////////////////////////////////////
// Сбор данных со всех списков
let allTitlesCount = 0;
listItems.forEach(item => {
    if (item.content != undefined) {
        item.content.forEach(id => {
            listTitles[id].count += 1;
            allTitlesCount += 1;
        });
    }
});

// Сортировка
listTitles.sort(compareTitlesCount);
function compareTitlesCount(title1, title2) {
    if (title1.count > title2.count) {
        return -1;
    }
    if (title1.count < title2.count) {
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
    elemTextStat(listTitles[element.index].title, element.color, proc, function (e) {
        showItemsWithTitle(listTitles[element.index].id);
    });
    // Отметить тайтл уже как видимый для пользователя в статистике
    listTitles[element.index].isShowing = true;
});

// Кнопка "Другие", которая при клике показывает все тайтлы
othersBtn();

function othersBtn() {
    elemTextStat("Others", "#5c5c5c", procLeft, function (e) {
        let otherTitleBtns = [];

        listTitles.forEach(element => {
            // Если элемент ещё не показан, значит его показывать после клика в статистике
            if (element.isShowing == false) {
                // Опять высчитываем проценты
                let proc = element.count * 100 / allTitlesCount;
                if(proc != 0){
                    // Создаём кнопку с теми же функциями, что и основную
                    otherTitleBtns.push(elemTextStat(element.title, "#5c5c5c", proc, function (e) {
                    showItemsWithTitle(element.id);
                }));
                }
                
            }
        });
        // Удалить кнопку "Others", т.к. она уже не нужна
        e.currentTarget.remove();

        // Добавить кнопку "Скрыть" для открытого уже списка
        let closeOthersBtn = document.createElement("a");
        closeOthersBtn.setAttribute("href", "#")
        closeOthersBtn.classList.add("btn");
        closeOthersBtn.textContent = "Hide";

        closeOthersBtn.addEventListener("click", function (e) {
            e.preventDefault();
            otherTitleBtns.forEach(element => {
                element.remove();
            });
            othersBtn();
            e.currentTarget.remove();
            window.open("#other-users", "_self");
        })
        statsGraphText.append(closeOthersBtn);
    });
}


// Показать в списке вопросов дня только те, что содержат индекс тайтла
function showItemsWithTitle(indexTitle) {
    daysSelectBtns.forEach(btn => {
        btn.classList.remove("selected");
    });
    isActiveNothing(false);
    clearItems();
    for (let i = 0; i < items.length; i++) {
        
        if (items[i].contentIDs != undefined) {
            if (items[i].contentIDs.includes(indexTitle)) {
                createItem(items[i]);
            }
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
    return elem;
}

//////////////////////////////////////////////////////
function isHrActive(isActive) {  
    if(isActive){
        itemsContainer.classList.remove("hide-hr")
    } else{
        itemsContainer.classList.add("hide-hr")
    }
}

function isActiveNothing(isActive) {
    if (isActive){
        let nothingElement = document.getElementById("nothing-text");
        if(nothingElement != undefined)
            return;

        nothingElement = document.createElement("div");
        nothingElement.setAttribute("id", "nothing-text");
        nothingElement.textContent = `Unfortunately we didn't find anything. Most likely, you entered an invalid request or I have not completed this task yet (the maximum completed day is ${items.length})`;

        itemsContainer.append(nothingElement);
    }
    else{
        let nothingElement = document.getElementById("nothing-text");
        if(nothingElement != undefined){
            nothingElement.remove();
        }
    }
}
