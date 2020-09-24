const projects = [
    {
        title: "Movies",
        img: "img/projects/icon_movies.png",
        link: "http://movies.cerassus.eu",
        done: true,
        icons: [
            {
                alt: "img-tech-1",
                url: "img/tech/react.png",
            },
            {
                alt: "img-tech-2",
                url: "img/tech/redux.png",
            },
            {
                alt: "img-tech-3",
                url: "img/tech/mui.png",
            },
        ],
        code: "https://github.com/cerassus/Portfolio-Movies",
    },
    {
        title: "Photos",
        img: "img/projects/icon_photo.png",
        link: "",
        done: false,
        icons: [
            {
                alt: "img-tech-1",
                url: "img/tech/react.png",
            },
            {
                alt: "img-tech-2",
                url: "img/tech/redux.png",
            },
            {
                alt: "img-tech-3",
                url: "img/tech/bootstrap.png",
            },
        ],
        code: "https://github.com/cerassus/CODE-ME-react-photos",
    },
    {
        title: "Whisky",
        img: "img/projects/icon_whisky.png",
        link: "http://cerassus.usermd.net/fcc-rwd-3/",
        done: true,
        icons: [
            {
                alt: "img-tech-1",
                url: "img/tech/html.png",
            },
            {
                alt: "img-tech-2",
                url: "img/tech/css.png",
            },
        ],
        code: "https://github.com/cerassus/Jameson-freeCodeCamp-RWD",
    },
]

const carousel_data = {
    whisky: {
        title: "Whisky",
        src: "img/hobbies/whisky_draw.png",
        desc: "I am a big fan of Single Malt Scotch and Irish whiskey. I really enjoy tasting new flavors using conventional methods, with ice or mixers. I prefer sweet and smooth flavor profile. So far, I had the greatest pleasure tasting Dalmore 12, Glendronach 12, Oban 14 and Glenmorangie Lasanta.",
    },
    art: {
        title: "Art",
        src: "img/hobbies/drawind_draw.png",
        desc: "From time to time I reach for my pencil. People are main objects of my artistic inspirations. I like to draw portraits - it teaches me patience and helps me to relax. Drawing and painting has taught me to pay much attention to details, allowing me to look at people in different way.",
    },
    travel: {
        title: "Travel",
        src: "img/hobbies/travel_draw.png",
        desc: "I owe my passion for travel to my uncle, who traveled to India on business purposes when I was little. I love to discover new places and learn from foreign cultures. Seeing so many different worlds has taught me to pay attention to things that I miss and to appreciate things that I had underestimated before.",
    },
}

export { projects, carousel_data }