function getDatach1kim0n1() {
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

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
                nickname: "SteveDekart",
                image: "images/users/ST.jpg",
                url: "https://stepan323446.github.io/anime-achievment-100days/",
                status: Status.Current
            },
            {
                nickname: "GreenDavid004",
                image: "images/users/david.jpg",
                url: "https://davidk004.github.io/100-day-challenge/",
                status: Status.Current
            },
            {
                nickname: "IamVoid",
                image: "images/users/IamVoid.png",
                url: "https://anilist.co/user/IamVoid/",
                status: Status.Current
            },
            {
                nickname: "F41NZ",
                image: "images/users/F41NZ.jpg",
                url: "https://anilist.co/user/F41NZ/",
                status: Status.Current
            },
            {
                nickname: "BommieBomBom",
                image: "images/users/BommieBomBom.jpg",
                url: "https://anilist.co/user/BommieBomBom",
                status: Status.Current
            },
            {
                nickname: "sololol",
                image: "images/users/sololol.jpg",
                url: "https://anilist.co/user/sololol",
                status: Status.Current
            },
            {
                nickname: "bokut0",
                image: "images/users/bokut0.png",
                url: "https://anilist.co/user/bokut0",
                status: Status.Current
            },
            {
                nickname: "keiikeii",
                image: "images/users/keiikeii.png",
                url: "https://anilist.co/user/keiikeii/",
                status: Status.Current
            },
            {
                nickname: "stephonee",
                image: "images/users/stephonee.png",
                url: "https://anilist.co/user/stephonee",
                status: Status.Current
            },
            {
                nickname: "RossyNarukami",
                image: "images/users/RossyHarukami.png",
                url: "https://anilist.co/activity/507121677",
                status: Status.Failed
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
            },
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
            new Title(32, "NONE"),
            new Title(33, "My Hero Academia"),
            new Title(34, "Silent Voice"),
            new Title(35, "The Future Diary"),
            new Title(36, "Classroom of the Elite"),
            new Title(37, "School Babysitters"),
            new Title(38, "Toradora"),
            new Title(39, "Call of the Night"),
            new Title(40, "Seton Academy: Join the Pack"),
            new Title(41, "BNA"),
            new Title(42, "DARLING in the FRANXX"),
            new Title(43, "Dark Mortal"),
            new Title(44, "Deadpool: Samurai"),
            new Title(45, "Question not related to titles"),
            new Title(46, "Midori Days"),
            new Title(47, "The Promised Neverlands"),
            new Title(48, "Belle"),
            new Title(49, "BLUELOCK"),
            new Title(50, "Komi Cant Communicate"),
            new Title(51, "To Your Eternity"),
            new Title(52, "In Another World With a Smartphone"),
            new Title(53, "Log Horizon"),
            new Title(54, "Cells At Work")

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
            content: [5, 13, 20, 1, 12, 2, 21]
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
            // Day 11
            title: "Favorite Mecha Anime",
            link: "https://anilist.co/activity/468995371",
            image: "images/11.jpg", 
            content: [4]
        },
        {
            // Day 12
            title: "Saddest Anime Scene",
            link: "https://anilist.co/activity/469345707",
            image: "images/12.14.jpg", 
            content: [1]
        },
        {
            // Day 13
            title: "Anime Character I am Most Similar to",
            link: "https://anilist.co/activity/470078702",
            image: "images/13.jpg", 
            content: [15]
        },
        {
            // Day 14
            title: "Saddest Anime Death", 
            link: "https://anilist.co/activity/470503529",
            image: "images/12.14.jpg",
            content: [1]
        },
        {
            // Day 15
            title: "Favorite Anime Sidekick, Pet, or Summoning", 
            link: "https://anilist.co/activity/471125545",
            image: "images/15.jpg",
            content: [31]
        },
        {
            // Day 16
            title: "Anime With the Best Animation", 
            link: "https://anilist.co/activity/471886554",
            image: "images/12.14.jpg",
            content: [1]
        },
        {
            // Day 17
            title: "Favorite Supporting Male Anime Character",
            link: "https://anilist.co/activity/472019025",
            image: "images/17.jpg",
            content: [13]
        },
        {
            // Day 18
            title: "Favorite Supporting Female Anime Character", 
            link: "https://anilist.co/activity/472657392",
            image: "images/18.png",
            content: [7]
        },
        {
            // Day 19
            title: "Most Epic Scene Ever",
            link: "https://anilist.co/activity/472810845",
            image: "images/19.jpg",
            content: [33]
        },
        {
            // Day 20
            title: "Anime Character That Gets on My Nerves",
            link: "https://anilist.co/activity/473309324",
            image: "images/26.jpg",
            content: [2]
        },
        {
            // Day 21
            title: "Favorite Goofy Anime Character",
            link: "https://anilist.co/activity/473952625",
            image: "images/21.jpg",
            content: [14]
        },
        {
            // Day 22
            title: "Best Gear, Weapon, or Gun Used in Anime",
            link: "https://anilist.co/activity/474276091",
            image: "images/22.jpg",
            content: [3]
        },
        {
            // Day 23
            title: "Favorite Attack Someone Used in Anime",
            link: "https://anilist.co/activity/474680626",
            image: "images/10.23.jpg",
            content: [0]
        },
        {
            // Day 24
            title: "Moment that Shocked Me the Most in Any Anime",
            link: "https://anilist.co/activity/475101190",
            image: "images/24.jpg",
            content: [34]
        },
        {
            // Day 25
            title: "Anime That Never Gets Old No Matter how Many Times You Rewatch It",
            link: "https://anilist.co/activity/475513617",
            image: "images/25.jpg",
            content: [11, 19, 6, 35]
        },
        {
            // Day 26
            title: "Best Anime Fight",
            link: "https://anilist.co/activity/475861077",
            image: "images/26.jpg",
            content: [2]
        },
        {
            // Day 27
            title: "Most Badass Scene from Any Anime Character",
            link: "https://anilist.co/activity/477420977",
            image: "images/27.30.jpg",
            content: [5]
        },
        {
            // Day 28
            title: "Favorite Quote From Any Anime Character",
            link: "https://anilist.co/activity/477423211",
            image: "images/28.jpg",
            content: [6]
        },
        {
            // Day 29
            title: "An Anime You Wished was Real",
            link: "https://anilist.co/activity/477424496",
            image: "images/29.jpg",
            content: [25, 43, 44]
        },
        {
            // Day 30
            title: "An Anime You wish Never Ended and Continued On",
            link: "https://anilist.co/activity/479010200",
            image: "images/27.30.jpg",
            content: [5]
        },
        {
            // Day 31
            title: "Favorite Anime OP",
            link: "https://anilist.co/activity/479010567",
            image: "images/31.jpg",
            content: [17]
        },
        {
            // Day 32
            title: "Which Anime Character would I want to be as Best Friend",
            link: "https://anilist.co/activity/479012598",
            image: "images/32.jpg",
            content: [16]
        },
        {
            // Day 33
            title: "Anime Character I Would Like to Cosplay",
            link: "https://anilist.co/activity/480201598",
            image: "images/10.23.jpg",
            content: [0]
        },
        {
            // Day 34
            title: "What Anime Character Would be My Workout Buddy",
            link: "https://anilist.co/activity/480203871",
            image: "images/34.jpg",
            content: [8]
        },
        {
            // Day 35
            title: "What Crossover I Would Like to See",
            link: "https://anilist.co/activity/480205220",
            image: "images/22.jpg",
            content: [5, 3]
        },
        {
            // Day 36
            title: "My First Anime Crush",
            link: "https://anilist.co/activity/481499685",
            image: "images/36.png",
            content: [9]
        },
        {
            // Day 37
            title: "Anime That Changed Me",
            link: "https://anilist.co/activity/481500301",
            image: "images/37.jpg",
            content: [10]
        },
        {
            // Day 38
            title: "Do I like Yaoi/Yuri",
            link: "https://anilist.co/activity/481501530",
            image: "images/38.png",
            content: [20]
        },
        {
            // Day 39
            title: "Favorite Music in an anime",
            link: "https://anilist.co/activity/483948838",
            image: "images/31.jpg",
            content: [12, 17]
        },
        {
            // Day 40
            title: "Favorite VA/seiyuu",
            link: "https://anilist.co/activity/483950083",
            image: "images/40.png",
            content: [13, 25, 3, 1, 23]
        },
        {
            // Day 41
            title: "Anime Character I Hate",
            link: "https://anilist.co/activity/483950740",
            image: "images/41.png",
            content: [36]
        },
        {
            // Day 42
            title: "Most Shocking Anime Scene",
            link: "https://anilist.co/activity/483953137",
            image: "images/13.jpg",
            content: [15]
        },
        {
            // Day 43
            title: "Favorite Cannon Couple", 
            link: "https://anilist.co/activity/483954050",
            image: "images/15.jpg",
            content: [31]
        },
        {
            // Day 44
            title: "Who do I ship",
            link: "https://anilist.co/activity/483954564",
            image: "images/44.gif",
            content: [20]
        },
        {
            // Day 45
            title: "Favorite Anime ED",
            link: "https://anilist.co/activity/486342518",
            image: "images/34.jpg",
            content: [8]
        },
        {
            // Day 46
            title: "Favorite Shoujo Anime",
            link: "https://anilist.co/activity/486735302",
            image: "images/46.jpg",
            content: [37]
        },
        {
            // Day 47
            title: "Favorite Tsundere",
            link: "https://anilist.co/activity/486736667",
            image: "images/47.jpg",
            content: [38, 39]
        },
        {
            // Day 48
            title: "Favorite Harem/Reversed Harem",
            link: "https://anilist.co/activity/487117302",
            image: "images/48.png",
            content: [40]
        },
        {
            // Day 49
            title: "Subs or Dubs",
            link: "https://anilist.co/activity/487142110",
            image: "images/49.jpg",
            content: [45]
        },
        {
            // Day 50
            title: "Favorite Studio",
            link: "https://anilist.co/activity/487148643",
            image: "images/50.jpg",
            content: [41, 42]
        },
        {
            // Day 51
            title: "Experience of being bullied for liking anime",
            link: "https://anilist.co/activity/488428207",
            image: "images/gifs/3.gif",
            content: [45]
        },    
        {
            // Day 52
            title: "Anime character I want to be look like",
            link: "https://anilist.co/activity/488429708",
            image: "images/12.14.jpg",
            content: [1]
        },    
        {
            // Day 53
            title: "Anime Scene that Made Me Cry",
            link: "https://anilist.co/activity/488437769",
            image: "images/53.jpg",
            content: [47, 48, 1, 11, 25]
        },   
        {
            // Day 54
            title: "Anime Recommendation that Most People May not Have Seen",
            link: "https://anilist.co/activity/489001508",
            image: "images/54.png",
            content: [46]
        }, 
        {
            // Day 55
            title: "Do you share your anime interests with anyone",
            link: "https://anilist.co/activity/489692013",
            image: "images/53.jpg",
            content: [1, 11, 5, 7]
        }, 
        {
            // Day 56
            title: "My favorite character",
            link: "https://anilist.co/activity/489692366",
            image: "images/10.23.jpg",
            content: [0]
        }, 
        {
            // Day 57
            title: "What anime has my heart",
            link: "https://anilist.co/activity/489692780",
            image: "images/8.2.png",
            content: [25]
        },
        {
            // Day 58
            title: "Favorite Hentai Anime",
            link: "https://anilist.co/activity/495702688",
            image: "images/5.jpg",
            content: [24]
        },
        {
            // Day 59
            title: "Favorite Yaoi Anime",
            link: "https://anilist.co/activity/495913906",
            image: "images/7.gif",
            content: [29]
        },
        {
            // Day 60
            title: "Manga I Wish Would Turn Into Anime",
            link: "https://anilist.co/activity/495916379",
            image: "images/60.jpg",
            content: [44]
        },
        {
            // Day 61
            title: "Anime that I am Currently Watching",
            link: "https://anilist.co/activity/497231789",
            image: "images/61.png",
            content: [20, 9, 8, 1]
        },
        {
            // Day 62
            title: "Favorite Anime Movie",
            link: "https://anilist.co/activity/497232169",
            image: "images/62.jpg",
            content: [34, 48]
        },
        {
            // Day 63
            title: "Favorite Shonen Anime",
            link: "https://anilist.co/activity/497232652",
            image: "images/12.14.jpg",
            content: [1]
        },
        {
            // Day 64
            title: "Favorite Shojo Anime",
            link: "https://anilist.co/activity/497233651",
            image: "images/8.2.png",
            content: [25]
        },
        {
            // Day 65
            title: "Favorite Sports Anime",
            link: "https://anilist.co/activity/497234112",
            image: "images/61.png",
            content: [49]
        },
        {
            // Day 66
            title: "Favorite Slice-Of-Life Anime",
            link: "https://anilist.co/activity/497234267",
            image: "images/66.png",
            content: [50]
        },
        {
            // Day 67
            title: "Favorite Comedy Anime",
            link: "https://anilist.co/activity/497234508",
            image: "images/18.png",
            content: [7, 20]
        },
        {
            // Day 68
            title: "Favorite Science Fiction Anime",
            link: "https://anilist.co/activity/497235495",
            image: "images/68.jpg",
            content: [47]
        },
        {
            // Day 69
            title: "Favorite Action/Adventure Anime",
            link: "https://anilist.co/activity/497236105",
            image: "images/53.jpg",
            content: [11, 5, 1]
        },
        {
            // Day 70
            title: "Favorite Fantasy Anime",
            link: "https://anilist.co/activity/503570145",
            image: "images/44.gif",
            content: [20]
        },
        {
            // Day 71
            title: "Favorite Romance Anime",
            link: "https://anilist.co/activity/503570512",
            image: "images/66.png",
            content: [3, 50, 13]
        },
        {
            // Day 72
            title: "Overrated Anime",
            link: "https://anilist.co/activity/503571010",
            image: "images/72.jpg",
            content: [51, 52]
        },
        {
            // Day 73
            title: "Underrated Anime",
            link: "https://anilist.co/activity/503571470",
            image: "images/73.png",
            content: [53, 54]
        },
        {
            // Day 74
            title: "Anime That Got me Into Anime",
            link: "https://anilist.co/activity/503571910",
            image: "images/25.jpg",
            content: [11, 12, 7, 19]
        },
        {
            // Day 74
            title: "Favorite Anime Friendship",
            link: "https://anilist.co/activity/503572741",
            image: "images/61.png",
            content: [49]
        }
    ]
}

return ch1kim0n1;
}
