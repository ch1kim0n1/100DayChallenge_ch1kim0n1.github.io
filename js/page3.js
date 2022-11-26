let listItems = [
    

]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0){
        itemsContainer.innerHTML += `<div class="hr-block"><div>${i+40}+</div></div>`;
    }

    itemsContainer.innerHTML += `
                <a href="${listItems[i].link}" class="item">
                    <div class="item-img">
                        <img src="${listItems[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h3>${listItems[i].title}</h3>
                    </div>
                    <span>${i + 21} Day</span> 
                </a>
    `;
}
