import { defineConfig } from "vitepress";


export default defineConfig({

    title: 'My Karate Rabbit Hole',
    description : 'This is my simple blog website that im going to use just to document my karate knowledge',
    base: '/my-karate-blog/',
    lastUpdated: true,

    themeConfig: {
        siteTitle: "My Karate Rabbit Hole",
        logo: 'https://raw.githubusercontent.com/mich-am/my-karate-blog/main/docs/main/images/logo.png',
        nav: [
          { text: 'Home', link: '/index'}
        ],

        sidebar: {

          '/main/': [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'About me', link: '/main/introduction/about-me'},
                {text: 'My idea', link: '/main/introduction/my-idea'}
            ]
          },

          {
            text: 'History',
            collapsed: false,
            items:[
                {text: 'What is it?', link: '/main/history/what-is-karate' },
                {text: 'Where did it come from?', link: '/main/history/where-karate-from'},
                {
                  text : 'Lineage',
                  collapsed: true,
                  link: '/main/history/lineage',
                  items:[
                    {text: 'Naha-te', link: '/main/history/naha-te'},
                    {text: 'Shuri-te', link: '/main/history/shuri-te'},
                    {text: 'Tomari-te', link: '/main/history/tomari-te'},
                    {text: 'Timeline', link: '/main/history/timeline'}
                  ]
                }
            ]
          },
          
          {
            text: 'Principles',
            collapsed: false,
            items:[
              {text: 'Niju Kun', link: '/main/principles/nijukun'}
            ]

          },
          {
            text: 'Okinawa Experience',
            collapsed: false,
            items:[
              {text: 'Hokama Sensei', link: '/main/okinawa/hokama'}
            ]
          },
            text: 'Kobudo',
            collapsed: false,
            link: '/main/coming_soon'
///
            items:[
              {text: 'Bojutsu', link: '/main/kobudo/bojutsu'}
            ]
          },
///
          {
            text: 'Side Quests',
            collapsed: true,
            items:[
              {
                text: 'Iaido',
                collapsed: true,
                link: '/main/sidequests/iaido',
                items:[
                  {text: 'styles', link: '/main/sidequests/iaido-styles'},
                  {text: 'MJER', link: '/main/sidequests/mjer'}
                ]
              }
            ]
          },

          {
            items:[
              {text: 'Feedback', link: '/main/feedback'}
            ]
          }
        ],

        '/priv/' : [
          {text: 'main', link: '/priv/main'},
          {text: 'skills and drills', link: '/priv/skills-drills'},
          {text: 'Iaido Techniques', link: '/priv/iaido-techniques'}
        ]
        }
    }
})