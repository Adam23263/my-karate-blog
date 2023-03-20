import { defineConfig } from "vitepress";


export default defineConfig({

    title: 'My Karate Rabbit Hole',
    description : 'This is my simple blog website that im going to use just to document my karate knowledge',
    base: '/my-karate-blog/',
    lastUpdated: true,

    markdown: {
      config: (md) => {
        md.use(require("markdown-it-katex"));
      },
    },


    themeConfig: {
        siteTitle: "My Karate Rabbit Hole",
        logo: 'https://raw.githubusercontent.com/mich-am/my-karate-blog/main/docs/images/logo.png',
        nav: [
          { text: 'Home', link: '/index'}
        ],

        sidebar: {

          '/main/': [
          {
            text: 'Introduction',
            link: '/main/introduction/about-me',
            collapsed: false,
            items: [
                {text: 'About me', link: '/main/introduction/about-me'},
                {text: 'My idea', link: '/main/introduction/my-idea'}
            ]
          },

          {
            text: 'History',
            link: '/main/history/what-is-karate',
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
            text: 'Foundations',
            collapsed: false,
            items:[
              {
                text: 'Physics Of Karate', 
                //collapsed: true,
                link: '/main/foundations/physics'
                //items: [
                //  {text: 'Force and momentum', link: '/main/foundations/force'}
                //]
                
              }
            ]

          },

          {
            text: 'Principles',
            collapsed: false,
            items:[
              {text: 'Bushido', link: '/main/principles/bushido'},
              {text: 'Niju Kun', link: '/main/principles/nijukun'}
            ]

          },

          {
            items:[
              {text: 'Feedback', link: '/main/feedback'}
            ]
          }
        ]
        }
    }
})