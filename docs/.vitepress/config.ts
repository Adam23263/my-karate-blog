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
            collapsed: false,
            items: [
                {text: 'About me', link: '/aboutMe'},
                {text: 'My idea', link: '/myIdea'}
            ]
          },

          {
            text: 'Karate',
            collapsed: false,
            items:[
                {text: 'What is it?', link: '/what-is-karate' },
                {text: 'Where did it come from?', link: '/where-karate-from'}
            ]
           }
        ]
    }
})