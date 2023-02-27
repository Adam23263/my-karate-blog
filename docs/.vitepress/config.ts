import { defineConfig } from "vitepress"

export default defineConfig({

    title: 'My Karate Rabbit Hole',
    description : 'This is my simple blog website that im going to use just to document my karate knowledge',
    base: '/my-karate-blog/',
    
    themeConfig: {
        siteTitle: "My Karate Rabbit Hole",
        logo: 'https://raw.githubusercontent.com/mich-am/my-karate-blog/main/docs/images/logo.png',
        nav: [
          { text: 'Home', link: '/index'}
        ],

        sidebar: [
          {
            text: 'Introduction',
            link: '/about-me',
            collapsed: false,
            items: [
                {text: 'About me', link: '/about-me'},
                {text: 'My idea', link: '/my-idea'}
            ]
          },

          {
            text: 'History',
            link: '/what-is-karate',
            collapsed: false,
            items:[
                {text: 'What is it?', link: '/what-is-karate' },
                {text: 'Where did it come from?', link: '/where-karate-from'},
                {text: 'Lineage', link: '/lineage'},
                {
                  items:[
                    {text: 'Naha-te', link: '/naha-te'},
                    {text: 'Shuri-te', link: '/shuri-te'},
                    {text: 'Tomari-te', link: '/tomari-te'}
                  ]
                }
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