

export const headerCards = [
            {
                "body": "Events",
                "link": "/events"
            },

            {
                "body": "Services",
                "link": "/services"
            },

            {
                "body": "Projects",
                "link": "/projects"
            },

            {
                "body": "Sponsors",
                "link": "/sponsors"
            },

            {
                "body": "Contact us",
                "link": "/contact"
            }
    ];


export const social = [
    {"name": "facebook", "link": "https://www.facebook.com/midnightwestproductions"},
    {"name": "instagram", "link":  "https://www.instagram.com/midnightwestproductions/"},
    {"name": "youtube", "link": "https://www.youtube.com/channel/UC2z1byO3TP4p4akBpmEhVkw/videos"}
];

export const sponsors = [
    {"name": "filmfreeway", "link": "https://filmfreeway.com/MidnightWestFest", "logo": 'filmfreeway-logo.png', 'key': 1}
];

export const projectCards = [
    {"name": 'mwf2021', "src": "mwf2021.png"},
    {"name": "Mothers and Sons", "src": "midnightmothers.jpg"},
    {"name": "It's a wonderful life", "src": "midnightwonder.jpg"}, 
    {"name": "Midnight Zombie Fest", "src": "midnightZfest.jpg"},
    {"name": "summer rage", "src": "summer_rage.jpg"}
]

export const eventCards = [
    {
        "name": 'mwf2021', "src": "mwf2021.png", 
        'description': 'Midnight West Fest is entering it’s third year, and we want your submissions! This year, we’ll be at The Historic Atlas Theatre for three days of independent film celebration! Friday night will kick off with live music, followed by an evening of comedy submissions. Saturday starts with High-Noon for our drama and action submissions, rounding out with another live preformance. From 6 that night until 3 in the morning with after dark set aside for our horror and grindhouse fans. Sunday will be family day, featuring our G and PG equivalent submissions as well as interactive filmmaking workshops for ages 6-14. Located in the heart of Downtown Cheyenne, our festival is mere blocks from a number of local restaurants and bars, as well as many of the historic and cultural landmarks of our Capitol City. 15% of all ticket sales will be donated to Cheyenne Little Theatre Players for the upkeep and maintenance of The Historic Atlas Theatre.' 
    },
    {"name": 'mwf2021', "src": "mwf2021.png"},
    {"name": "Midnight Zombie Fest", "src": "midnightZfest.jpg"},
    {"name": "2019 mwf", "src": "heart-hand-poster.jpg"},
    {"name": "shamrocks and screams lock-in", "src": "midnight-cereal-1.jpg"},
    {"name": "martial arts and murder", "src": "midnight-kungfu-1.jpg"},
    {"name": "marijuana movie marathon", "src": "midnight-weed.jpg"}
]


export const setProjectCards = (action, card='', name='') => {
    if(action === 'add'){
        projectCards = [...projectCards, card]
    } else if(action === 'remove'){
        for(let c of projectCards){
            if(c[name] === name){
                projectCards.pop(c)
            }
        }
    }
}