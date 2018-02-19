const storeData = {
    post: 32,
    name:'Soham Dan',
    profilePic:'./me.jpg',
    role:'Frontend Developer',
    bio:'I am a Frontend Developer and a Design enthusiast.Suffers from high OCD, and cooks good alu bhaja :P',
    links:[
        {
            title: 'Github',
            link:'https://www.github.com',
            icon:'fa fa-github-square',
            id: 1
        },
        {
            title: 'LinkedIn',
            link:'https://www.linkedin.com',
            icon:'fa fa-linkedin-square',
            id: 2
        },
        {
            title: 'Twitter',
            link:'https://www.twitter.com',
            icon:'fa fa-twitter-square',
            id: 3
        }
    ],
    posts:[
        {
        title: 'AOE - Conquerors Conquest',
        postImg:'./i1.jpg',
        desc:'Age of Empires is a series of personal computer games originally developed by Ensemble Studios and published by Microsoft Studios. The first title of the series was Age of Empires, released in 1997. Since then, seven titles and three spin-offs have been released. The titles are historical real-time strategy games.',
        link:'/Post',
        createDate:'December 26th, 2017',
        comments:2,
        tags:[
            {
                    name:'game',
                    link:'/tags/game',
                    id:1
            },
            {
                    name:'pc games',
                    link:'/tags/pcgame',
                    id:2
                },
                {
                    name:'stategy',
                    link:'/tags/strategy',
                    id:3
                }
        ],
        id: 1
        },
        {
        title: 'Thanos - Origins',
        postImg:'./i2.jpg',
        desc:'Thanos was born on Saturns moon Titan, and is the child of Eternals Mentor and Sui-San. Thanos carries the Deviants gene, and as such shares the physical appearance of the Eternals cousin race. At birth, his mother was shocked by his appearance and attempted to kill him. During his school years, Thanos was a pacifist and would only play with his brother Eros (Starfox) and pets.',
        link:'https://www.google.com',
        createDate:'December 14th, 2017',
        comments:5,
        tags:[
            {
                name:'comic',
                link:'/tags/comic',
                id:1
            },
            {
                name:'infinity gaunlet',
                link:'/tags/infinity-gaunlet',
                id:2
            },
            {
                name:'justice league',
                link:'/tags/justiceleague',
                id:3
            }
        ],
        id: 2
        }
    ]
}
export default storeData;