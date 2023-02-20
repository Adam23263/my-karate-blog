export default {
    title: 'My Karate Rabit Hole',
    description : 'This is my simple blog webiste that im going to use just to document my karate knowlage',
    base: '/my-karate-blog/',
    themeConfig: {
        siteTitle: "My Karate Rabit Hole",
        logo: '/logo.png',

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
            text: 'text',
            collapsed: true,
            items:[
                {text: 'page two', link: '/page2' }
            ]
            
          }
        ]
    }   
        
}
