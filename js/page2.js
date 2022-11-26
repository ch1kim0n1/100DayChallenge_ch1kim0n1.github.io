let listItems = [
    {
        title: "Favorite Goofy Anime Character", //day 21
        link: "https://anilist.co/activity/473952625",
        image: "images/21.jpg" 
    },
    {
        title: "Best Gear, Weapon, or Gun Used in Anime", //day 22
        link: "https://anilist.co/activity/474276091",
        image: "images/22.jpg" 
    },
    {
        title: "Favorite Attack Someone Used in Anime", //day 23
        link: "https://anilist.co/activity/474680626",
        image: "images/10.23.jpg" 
    },
    {
        title: "Moment that Shocked Me the Most in Any Anime", //day 24
        link: "https://anilist.co/activity/475101190",
        image: "images/24.jpg" 
    },
    {
        title: "Anime That Never Gets Old No Matter how Many Times You Rewatch It", //day 25
        link: "https://anilist.co/activity/475513617",
        image: "images/25.jpg" 
    },
    {
        title: "Best Anime Fight", //day 26
        link: "https://anilist.co/activity/475861077",
        image: "images/26.jpg" 
    },
    {
        title: "Most Badass Scene from Any Anime Character", //day 27
        link: "https://anilist.co/activity/477420977",
        image: "images/27.30.jpg" 
    },
    {
        title: "Favorite Quote From Any Anime Character", //day 28
        link: "https://anilist.co/activity/477423211",
        image: "images/28.jpg" 
    },
    {
        title: "An Anime You Wished was Real", //day 29
        link: "https://anilist.co/activity/477424496",
        image: "images/29.jpg" 
    },
    {
        title: "An Anime You wish Never Ended and Continued On", //day 30
        link: "https://anilist.co/activity/479010200",
        image: "images/27.30.jpg" 
    },
    {
        title: "Favorite Anime OP", //day 31
        link: "https://anilist.co/activity/479010567",
        image: "images/31.jpg" 
    },
    {
        title: "Which Anime Character would I want to be as Best Friend", //day 32
        link: "https://anilist.co/activity/479012598",
        image: "images/32.jpg" 
    },
    {
        title: "Anime Character I Would Like to Cosplay", //day 33
        link: "https://anilist.co/activity/480201598",
        image: "images/10.23.jpg" 
    },
    {
        title: "What Anime Character Would be My Workout Buddy", //day 34
        link: "https://anilist.co/activity/480203871",
        image: "images/34.jpg" 
    },
    {
        title: "What Crossover I Would Like to See", //day 35
        link: "https://anilist.co/activity/480205220",
        image: "images/22.jpg" 
    },
    {
        title: "My First Anime Crush", //day 36
        link: "https://anilist.co/activity/481499685",
        image: "images/36.png" 
    },
    {
        title: "Anime That Changed Me", //day 37
        link: "https://anilist.co/activity/481500301",
        image: "images/37.jpg" 
    },
    {
        title: "Do I like Yaoi/Yuri", //day 38
        link: "https://anilist.co/activity/481501530",
        image: "images/38.png" 
    },

]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0){
        itemsContainer.innerHTML += `<div class="hr-block"><div>${i+20}+</div></div>`;
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
