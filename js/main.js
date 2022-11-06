let listItems = [
    {
        title: "Very first anime you watched",
        link: "https://anilist.co/activity/464575970",
        image: "images/1.1.png"
    },
    {
        title: "Favorite anime you've watched so far",
        link: "https://anilist.co/activity/464958093",
        image: "images/2.1.2019.jpg"
    },
    {
        title: "Favorite male anime character ever",
        link: "https://anilist.co/activity/465340663",
        image: "images/3.1.png"
    },
    {
        title: "Favorite female anime character ever",
        link: "https://anilist.co/activity/465784021",
        image: "images/4.png"
    },
    {
        title: "Anime I'm ashamed I enjoyed",
        link: "https://anilist.co/activity/466207484",
        image: "images/5.jpg"
    },
    {
        title: "Anime I want to see but haven't yet",
        link: "https://anilist.co/activity/466630832",
        image: "images/6.1.jpg"
    },
    {
        title: "My anime crush",
        link: "https://anilist.co/activity/467134426",
        image: "images/7.gif"
    },
    {
        title: "Favorite anime couple",
        link: "https://anilist.co/activity/467618427",
        image: "images/8.2.png"
    },
    {
        title: "Best Anime Villian",
        link: "https://anilist.co/activity/467921021",
        image: "images/9.png" //day 9
    },
    {
        title: "Favorite Fighter Anime",
        link: "https://anilist.co/activity/468522251",
        image: "images/10.jpg"
    },
    {
        title: "Favorite mecha anime",
        link: "https://anilist.co/activity/468995371",
        image: "images/11.jpg" //day 11
    },
    {
        title: "Saddest Anime Scene",
        link: "https://anilist.co/activity/469345707",
        image: "images/12.14.jpg" //day 12
    },
    {
        title: "Anime Character I am Most Similar to",
        link: "https://anilist.co/activity/470078702",
        image: "images/13.jpg" //day 13
    },
]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
    itemsContainer.innerHTML += `
                <a href="${listItems[i].link}" class="item">
                    <div class="item-img">
                        <img src="${listItems[i].image}" alt="">
                    </div>
                    <div class="info">
                        <h3>${listItems[i].title}</h3>
                    </div>
                    <span>${i + 1} Day</span>
                </a>
    `;
}
