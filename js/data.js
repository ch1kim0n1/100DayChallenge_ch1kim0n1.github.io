function getDatach1kim0n1() {
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

    // Создание объекта тайтла
    /////////////////////////////////////////////////////////
    class Title {
        id;
        title;
        count;
        isShowing;

        constructor(id, title) {
            this.id = id;
            this.title = title;
            this.count = 0;
            this.isShowing = false;
        }
    }

    let ch1kim0n1 = {
        otherUsers: [
            {
                nickname: "GHAUR1",
                image: "images/users/Ghaur1.png",
                url: "https://anilist.co/activity/474754966",
                status: Status.Complete
            },
            {
                nickname: "OskarL",
                image: "images/users/OskarL.jpg",
                url: "https://anilist.co/activity/478516794",
                status: Status.Complete
            },
            {
                nickname: "Karandi",
                image: "images/users/Karandi.webp",
                url: "https://100wordanime.blog/category/30-day-anime-challenge/",
                status: Status.Complete
            },
            {
                nickname: "SteveDekart",
                image: "images/users/ST.jpg",
                url: "https://anilist.co/user/SteveDekart/",
                status: Status.Current
            },
            {
                nickname: "GreenDavid004",
                image: "images/users/david.jpg",
                url: "https://anilist.co/user/GreenDavid004/",
                status: Status.Current
            },
            {
                nickname: "Ani-Dotes",
                image: "images/users/dotes.jpg",
                url: "https://anidotesblog.wordpress.com/100-day-anime-challenge/",
                status: Status.Failed
            },
            {
                nickname: "Celestial Sparkles",
                image: "images/users/CelestialSparkles.png",
                url: "https://howanimestuffworks176744600.wordpress.com/category/anime-challenges-events/100-days-of-anime-challenge/",
                status: Status.Failed
            }
        ],

        listTitles: [
            new Title(0, "One Punch Man"),
            new Title(1, "Demon Slayer"),
            new Title(2, "Ranking of Kings"),
            new Title(3, "Sword Art Online"),
            new Title(4, "86 - Eighty-six"),
            new Title(5, "No Game, No Life"),
            new Title(6, "Death Note"),
            new Title(7, "Konosuba"),
            new Title(8, "Spy x Family"),
            new Title(9, "Pokemon"),
            new Title(10, "Tower of God"),
            new Title(11, "Assossination Classroom"),
            new Title(12, "ERASED"),
            new Title(13, "Re:ZERO -Starting Life in Another World-"),
            new Title(14, "POP TEAM EPIC"),
            new Title(15, "That Time I Got Reincarnated as a Slime"),
            new Title(16, "Himouto! Umaru-chan"),
            new Title(17, "Ya Boy Kongming!"),
            new Title(18, "One Piece"),
            new Title(19, "Bakugan Battle Brawlers"),
            new Title(20, "Miss Kobayashi's Dragon Maid"),
            new Title(21, "Overlord"),
            new Title(22, "Love, Chunibyo & Other Delusions"),
            new Title(23, "Aharen-san wa Hakarenai"),
            new Title(24, "Interspecies Reviewers"),
            new Title(25, "Teasing Master Takagi-san"),
            new Title(26, "Isekai Quartet"),
            new Title(27, "Fullmetal Alchemist: Brotherhood"),
            new Title(28, "Katanagatari"),
            new Title(29, "!_No answer for this question_!"),
            new Title(30, "JoJo's Bizarre Adventure"),
            new Title(31, "Naruto"),
            new Title(32, "BAKI"),
            new Title(33, "My Hero Academia"),
            new Title(34, "Silent Voice"),
            new Title(35, "The Future Diary"),
            new Title(36, "Classroom of the Elite"),
        ],


    listItems: [
        {
            // Day 1
            title: "Very First Anime You Watched",
            link: "https://anilist.co/activity/464575970",
            image: "images/1.jpg",
            content: [18, 19] 
        },
        {
            // Day 2
            title: "Favorite Anime You've Watched So Far",
            link: "https://anilist.co/activity/464958093",
            image: "images/2.2.jpg",
            content: [5, 13, 20, 1, 12, 2, ]
        },
        {
            // Day 3
            title: "Favorite Male Anime Character Ever",
            link: "https://anilist.co/activity/465340663",
            image: "images/3.1.png",
            content: [0, 11]
        },
        {
            // Day 4
            title: "Favorite Female Anime Character Ever",
            link: "https://anilist.co/activity/465784021",
            image: "images/4.jpg",
            content: [22, 23]
        },
        {
            // Day 5
            title: "Anime I'm Ashamed I Enjoyed",
            link: "https://anilist.co/activity/466207484",
            image: "images/5.jpg",
            content: [24]
        },
        {
            // Day 6
            title: "Anime I Want to See But Haven't Yet",
            link: "https://anilist.co/activity/466630832",
            image: "images/6.2.jpg",
            content: [25, 26, 27, 28] 
        },
        {
            // Day 7
            title: "My Anime Crush",
            link: "https://anilist.co/activity/467134426",
            image: "images/7.gif",
            content: [29]
        },
        {
            // Day 8
            title: "Favorite Anime Couple",
            link: "https://anilist.co/activity/467618427",
            image: "images/8.2.png",
            content: [25]
        },
        {
            // Day 9
            title: "Best Anime Villian",
            link: "https://anilist.co/activity/467921021",
            image: "images/9.png",
            content: [13]
        },
        {
            // Day 10
            title: "Favorite Fighter Anime",
            link: "https://anilist.co/activity/468522251",
            image: "images/10.23.jpg",
            content: [0, 30]
        },
        {
            title: "Favorite Mecha Anime",
            link: "https://anilist.co/activity/468995371",
            image: "images/11.jpg", //day 11
            content: [4]
        },
        {
            title: "Saddest Anime Scene",
            link: "https://anilist.co/activity/469345707",
            image: "images/12.14.jpg", //day 12
            content: [1]
        },
        {
            title: "Anime Character I am Most Similar to",
            link: "https://anilist.co/activity/470078702",
            image: "images/13.jpg", //day 13
            content: [15]
        },
        {
            title: "Saddest Anime Death", //day 14
            link: "https://anilist.co/activity/470503529",
            image: "images/12.14.jpg",
            content: [1]
        },
        {
            title: "Favorite Anime Sidekick, Pet, or Summoning", //day 15
            link: "https://anilist.co/activity/471125545",
            image: "images/15.jpg",
            content: [31]
        },
        {
            title: "Anime With the Best Animation", //day 16
            link: "https://anilist.co/activity/471886554",
            image: "images/16.jpg",
            content: [32]
        },
        {
            title: "Favorite Supporting Male Anime Character", //day 17
            link: "https://anilist.co/activity/472019025",
            image: "images/17.jpg",
            content: [13]
        },
        {
            title: "Favorite Supporting Female Anime Character", //day 18
            link: "https://anilist.co/activity/472657392",
            image: "images/18.png",
            content: [7]
        },
        {
            title: "Most Epic Scene Ever", //day 19
            link: "https://anilist.co/activity/472810845",
            image: "images/19.jpg",
            content: [33]
        },
        {
            title: "Anime Character That Gets on My Nerves", //day 20
            link: "https://anilist.co/activity/473309324",
            image: "images/26.jpg",
            content: [2]
        },
        {
            title: "Favorite Goofy Anime Character", //day 21
            link: "https://anilist.co/activity/473952625",
            image: "images/21.jpg",
            content: [14]
        },
        {
            title: "Best Gear, Weapon, or Gun Used in Anime", //day 22
            link: "https://anilist.co/activity/474276091",
            image: "images/22.jpg",
            content: [3]
        },
        {
            title: "Favorite Attack Someone Used in Anime", //day 23
            link: "https://anilist.co/activity/474680626",
            image: "images/10.23.jpg",
            content: [0]
        },
        {
            title: "Moment that Shocked Me the Most in Any Anime", //day 24
            link: "https://anilist.co/activity/475101190",
            image: "images/24.jpg",
            content: [34]
        },
        {
            title: "Anime That Never Gets Old No Matter how Many Times You Rewatch It", //day 25
            link: "https://anilist.co/activity/475513617",
            image: "images/25.jpg",
            content: [11, 19, 6, 35]
        },
        {
            title: "Best Anime Fight", //day 26
            link: "https://anilist.co/activity/475861077",
            image: "images/26.jpg",
            content: [2]
        },
        {
            title: "Most Badass Scene from Any Anime Character", //day 27
            link: "https://anilist.co/activity/477420977",
            image: "images/27.30.jpg",
            content: [5]
        },
        {
            title: "Favorite Quote From Any Anime Character", //day 28
            link: "https://anilist.co/activity/477423211",
            image: "images/28.jpg",
            content: [6]
        },
        {
            title: "An Anime You Wished was Real", //day 29
            link: "https://anilist.co/activity/477424496",
            image: "images/29.jpg",
            content: [29]
        },
        {
            title: "An Anime You wish Never Ended and Continued On", //day 30
            link: "https://anilist.co/activity/479010200",
            image: "images/27.30.jpg",
            content: [5]
        },
        {
            title: "Favorite Anime OP", //day 31
            link: "https://anilist.co/activity/479010567",
            image: "images/31.jpg",
            content: [17]
        },
        {
            title: "Which Anime Character would I want to be as Best Friend", //day 32
            link: "https://anilist.co/activity/479012598",
            image: "images/32.jpg",
            content: [16]
        },
        {
            title: "Anime Character I Would Like to Cosplay", //day 33
            link: "https://anilist.co/activity/480201598",
            image: "images/10.23.jpg",
            content: [0]
        },
        {
            title: "What Anime Character Would be My Workout Buddy", //day 34
            link: "https://anilist.co/activity/480203871",
            image: "images/34.jpg",
            content: [8]
        },
        {
            title: "What Crossover I Would Like to See", //day 35
            link: "https://anilist.co/activity/480205220",
            image: "images/22.jpg",
            content: [5, 3]
        },
        {
            title: "My First Anime Crush", //day 36
            link: "https://anilist.co/activity/481499685",
            image: "images/36.png",
            content: [9]
        },
        {
            title: "Anime That Changed Me", //day 37
            link: "https://anilist.co/activity/481500301",
            image: "images/37.jpg",
            content: [10]
        },
        {
            title: "Do I like Yaoi/Yuri", //day 38
            link: "https://anilist.co/activity/481501530",
            image: "images/38.png",
            content: [20]
        },
        {
            title: "Favorite Music in an anime", //day 39
            link: "https://anilist.co/activity/483948838",
            image: "images/31.jpg",
            content: [12, 17]
        },
        {
            title: "Favorite VA/seiyuu", //day 40
            link: "https://anilist.co/activity/483950083",
            image: "images/40.png",
            content: [29]
        },
        {
            title: "Anime Character I Hate", //day 41
            link: "https://anilist.co/activity/483950740",
            image: "images/41.png",
            content: [36]
        },
        {
            title: "Most Shocking Anime Scene", //day 42
            link: "https://anilist.co/activity/483953137",
            image: "images/13.jpg",
            content: [15]
        },
        {
            title: "Favorite Cannon Couple", //day 43
            link: "https://anilist.co/activity/483954050",
            image: "images/15.jpg",
            content: [31]
        },
        {
            title: "Who do I ship", //day 44
            link: "https://anilist.co/activity/483954564",
            image: "images/44.gif",
            content: [29]
        },
        {
            title: "Favorite Anime ED", //day 45
            link: "https://anilist.co/activity/486342518",
            image: "images/34.jpg",
            content: [8]
        },
    
    ]
}

return ch1kim0n1;
}
