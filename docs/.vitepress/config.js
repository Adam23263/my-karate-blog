import { defineConfig } from "vitepress";


export default defineConfig({

    title: 'My Karate Rabbit Hole',
    description : 'This is my simple blog website that im going to use just to document my karate knowledge',
    base: '/my-karate-blog/',
    lastUpdated: true,

    themeConfig: {
        siteTitle: "My Karate Rabbit Hole",
        logo: 'https://raw.githubusercontent.com/mich-am/my-karate-blog/main/docs/images/logo.png',
        nav: [
          { text: 'Home', link: '/index'}
        ],

        sidebar: [
          {
            text: 'Introduction',
            link: '/introduction/about-me',
            collapsed: false,
            items: [
                {text: 'About me', link: '/introduction/about-me'},
                {text: 'My idea', link: '/introduction/my-idea'}
            ]
          },

          {
            text: 'History',
            link: '/history/what-is-karate',
            collapsed: false,
            items:[
                {text: 'What is it?', link: '/history/what-is-karate' },
                {text: 'Where did it come from?', link: '/history/where-karate-from'},
                {
                  text : 'Lineage',
                  collapsed: true,
                  link: '/history/lineage',
                  items:[
                    {text: 'Naha-te', link: '/history/naha-te'},
                    {text: 'Shuri-te', link: '/history/shuri-te'},
                    {text: 'Tomari-te', link: '/history/tomari-te'},
                    {text: 'Timeline', link: '/history/timeline'}
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
                link: '/foundations/physics'
                //items: [
                //  {text: 'Force and momentum', link: '/foundations/force'}
                //]
                
              }
            ]

          },

          {
            text: 'Principles',
            collapsed: false,
            items:[
              {text: 'Bushido', link: '/principles/bushido'},
              {text: 'Niju Kun', link: '/principles/nijukun'}
            ]

          },

          {
            items:[
              {text: 'Feedback', link: '/feedback'}
            ]
          }
        ]
    }
})