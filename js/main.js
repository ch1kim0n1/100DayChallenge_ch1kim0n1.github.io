let listItems = [
    {
        title: "Very first anime you watched",
        link: "https://anilist.co/activity/464575970",
        image: "images/challenge/1.1.jpg"
    },
    {
        title: "Favorite anime you've watched so far",
        link: "https://anilist.co/activity/464958093",
        image: "images/challenge/2.1.2019.jpg"
    },
    {
        title: "Favorite male anime character ever",
        link: "https://anilist.co/activity/465340663",
        image: "images/challenge/3.1.jpg"
    },
    {
        title: "Favorite female anime character ever",
        link: "https://anilist.co/activity/465784021",
        image: "images/challenge/4.png"
    },
    {
        title: "Anime I'm ashamed I enjoyed",
        link: "https://anilist.co/activity/466207484",
        image: "images/challenge/5.jpg"
    },
    {
        title: "Anime I want to see but haven't yet",
        link: "https://anilist.co/activity/466630832",
        image: "images/challenge/6.1.jpg"
    },
    {
        title: "My anime crush",
        link: "https://anilist.co/activity/467134426",
        image: "images/challenge/7.jpg"
    },
    {
        title: "Favorite anime couple",
        link: "https://anilist.co/activity/467618427",
        image: "images/challenge/8.2.png"
    },
    {
        title: "Best Anime Villian",
        link: "https://anilist.co/activity/467921021",
        image: "images/challenge/9.png" //day 9
    },
    {
        title: "Favorite Fighter Anime",
        link: "https://anilist.co/activity/468522251",
        image: "images/challenge/10.jpg"
    },
    {
        title: "Favorite mecha anime",
        link: "https://anilist.co/activity/468995371",
        image: "images/challenge/11.jpg" //day 11
    }
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
