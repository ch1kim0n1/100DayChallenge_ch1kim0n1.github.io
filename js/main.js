let listItems = [
    {
        title: "Very First Anime You Watched",
        link: "https://anilist.co/activity/464575970",
        image: "images/1.jpg" //day 1
    },
    {
        title: "Favorite Anime You've Watched So Far",
        link: "https://anilist.co/activity/464958093",
        image: "images/2.2.jpg" //day 2
    },
    {
        title: "Favorite Male Anime Character Ever",
        link: "https://anilist.co/activity/465340663",
        image: "images/3.1.png" //day 3
    },
    {
        title: "Favorite Female Anime Character Ever",
        link: "https://anilist.co/activity/465784021",
        image: "images/4.jpg" //day 4
    },
    {
        title: "Anime I'm Ashamed I Enjoyed",
        link: "https://anilist.co/activity/466207484",
        image: "images/5.jpg" //day 5
    },
    {
        title: "Anime I Want to See But Haven't Yet",
        link: "https://anilist.co/activity/466630832",
        image: "images/6.2.jpg" //day 6
    },
    {
        title: "My Anime Crush",
        link: "https://anilist.co/activity/467134426",
        image: "images/7.gif" //day 7
    },
    {
        title: "Favorite Anime Couple",
        link: "https://anilist.co/activity/467618427",
        image: "images/8.2.png" //day 8
    },
    {
        title: "Best Anime Villian",
        link: "https://anilist.co/activity/467921021",
        image: "images/9.png" //day 9
    },
    {
        title: "Favorite Fighter Anime",
        link: "https://anilist.co/activity/468522251",
        image: "images/10.23.jpg" //day 10
    },
    {
        title: "Favorite Mecha Anime",
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
    {
        title: "Saddest Anime Death", //day 14
        link: "https://anilist.co/activity/470503529",
        image: "images/12.14.jpg"
    },
    {
        title: "Favorite Anime Sidekick, Pet, or Summoning", //day 15
        link: "https://anilist.co/activity/471125545",
        image: "images/15.jpg"
    },
    {
        title: "Anime With the Best Animation", //day 16
        link: "https://anilist.co/activity/471886554",
        image: "images/16.jpg" 
    },
    {
        title: "Favorite Supporting Male Anime Character", //day 17
        link: "https://anilist.co/activity/472019025",
        image: "images/17.jpg" 
    },
    {
        title: "Favorite Supporting Female Anime Character", //day 18
        link: "https://anilist.co/activity/472657392",
        image: "images/18.png" 
    },
    {
        title: "Most Epic Scene Ever", //day 19
        link: "https://anilist.co/activity/472810845",
        image: "images/19.jpg" 
    },
    {
        title: "Anime Character That Gets on My Nerves", //day 20
        link: "https://anilist.co/activity/473309324",
        image: "images/26.jpg" 
    }

]

const itemsContainer = document.getElementById("challenge-items");

for(let i = 0; i < listItems.length; i++){
    if((i % 10) == 0){
        itemsContainer.innerHTML += `<div class="hr-block"><div>${i}+</div></div>`;
    }

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
