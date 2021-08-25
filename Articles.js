const articles = [
    {
        id: 1,
        title: 'Express JS Crash Course',
        author: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
        description: 'An excellent Express.js youtube tutorial that covers express servers, middleware, api routes, and handlebars.',
        read: true
    },
    {
        id: 2,
        title: 'MySQL Crash Course',
        author: 'Traversy Media',
        url: 'https://www.youtube.com/watch?v=9ylj9NR0Lcg',
        description: 'A MySQL youtube tutorial that covers setting up users, and navigating the MySQL command line and Workbench.',
        read: false,
    },
    {
        id: 3,
        title: 'Time Complexity – Big O Notation Course',
        author: 'Free Code Camp',
        url: 'https://www.freecodecamp.org/news/learn-big-o-notation/',
        description: 'A tutorial on Big O notation.',
        read: false
    }
]

module.exports = articles