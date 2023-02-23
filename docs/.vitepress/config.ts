import { defineConfig } from "vitepress"

export default defineConfig({

    title: 'My Karate Rabit Hole',
    description : 'This is my simple blog webiste that im going to use just to document my karate knowlage',
    base: '/my-karate-blog/',
    
    themeConfig: {
        siteTitle: "My Karate Rabit Hole",
        logo: 'https://raw.githubusercontent.com/mich-am/my-karate-blog/main/docs/logo.png',
        nav: [
          { text: 'Home', link: '/index'}
        ],

        sidebar: [
          {
            text: 'Intoduction',
            collapsed: false,
            items: [
                {text: 'Amout me', link: '/aboutMe'},
                {text: 'My idea', link: '/myIdea'}
            ]
          },

          {
            text: 'section 2',
            collapsed: true,
            items:[
                {text: 'page one', link: '/page2' },
                {text: 'page two'}
            ]
           }
        ]
    }
})