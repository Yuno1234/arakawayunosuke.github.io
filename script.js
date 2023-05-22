const primaryNav = document.querySelector('.primary_navigation')
const overlay = document.querySelector('.overlay')
const navToggle = document.querySelector('.mobile_nav_toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        overlay.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false)
        overlay.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})


const modal = document.querySelector('.modal');
const projectBtn = document.querySelectorAll('.project');
const closeModal = document.querySelectorAll('.close_button');


const projectContent = {
    p1: {
        title: "Twitter Clone App",
        desc: "This social networking app is similar in design and function to Twitter. Users are able to post, like and edit posts. They can also view other users profile and follow them. In the following image users can view posts of other users they have followed.<br><br>For this project I wanted to build single page application using vanilla JavaScript and Django. Using different request methods other than GET and POST was one of the things I learned from the project. Showing different elements depending on user authentication and the state of the app was one thing I struggled in the project. After completing this project I gained more confidence and better understanding of how the web works.",
        tech: ["HTML", "CSS", "JavaScript", "Django"],
        image: ["./images/twitter_clone_screen1.png", "./images/twitter_clone_screen2.png"],
        repo: "https://github.com/Yuno1234/network"
    },
    p2: {
        title: "Auction App",
        desc: "An eBay-like e-commerce auction site where users can post their auction listings, bid on them, leave comments on the listings, and add items to a personalized watchlist.<br><br>This project was the first time I used data models. At first I struggled with creating a database with classes and properties instead of queries. Searching for data types and properties I wanted was the hardest part when I new nothing about NoSQL Databases. Once I've created the data models, the process of manipulating data was much easier and quicker than writing SQL queries. This project was a great practice for me to learn the Django models and getting more familiar with the features I knew.",
        tech: ["HTML", "CSS", "Django"],
        image: ["./images/auction_app_screen1.png", "./images/auction_app_screen2.png"],
        repo: "https://github.com/Yuno1234/commerce"
    },
    p3: {
        title: "Anime App",
        desc: "An app that utilizes the Anilist API to monitor and display the top fifty most popular animes. The application presents a comprehensive summary of the animes on a single page, including a synopsis, episode count, start and end dates, status chart, and score distribution.<br><br>In this project I learned to fetch data from an external API using GraphQL. Once I was all set up for fetching data, GraphQL was simple and easy to use and I enjoyed making this application. It was also my first time using Chart.js which was also a great library for creating beautiful data visualization.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        image: ["./images/anime_app_screen1.png", "./images/anime_app_screen2.png"],
        repo: "https://github.com/Yuno1234/Anime-App"
    },
    p4: {
        title: "Pokedex App",
        desc: 'The app displays information about Pokémons up to the ninth generation. The application allows users to search for Pokémon, view general information, evolution, capable moves of the selected Pokémon, and compare Pokémon. For this project, I solidified the basics of React, such as creating functional components, using props and state, and most commonly used events and Hooks. I also used popular libraries such as Redux Toolkit, axios, Tailwind CSS, React Router, and react-charts-2. During the process of building this project, I gained a deeper understanding of React and what React actually does when combined with other technologies.',
        tech: ["ReactJS", "Redux Toolkit", "TailwindCSS", "API"],
        image: ["./images/pokedex_app_screen1.png", "./images/pokedex_app_screen2.png", "./images/pokedex_app_screen3.png", "./images/pokedex_app_screen4.png", "./images/pokedex_app_screen5.png"],
        repo: "https://github.com/Yuno1234/pekedex_app"
    },
    p5: {
        title: "Email App",
        desc: "A single page web application for sending and receiving emails. This app allows users to view, send, reply and archive their emails.<br><br>This web app was the first time I used Django with JavaScript. Sending and retrieving data asynchronously added more complexity to the project with more DOM manipulation. This was a great project for me to learn how most modern single page application worked.",
        tech: ["HTML", "CSS", "JavaScript", "Django"],
        image: ["./images/email_screen1.png", "./images/email_screen2.png", "./images/email_screen3.png"],
        repo: "https://github.com/Yuno1234/mail"
    },
}

projectBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const projectModalContent = document.querySelector('.project_modal__content')
        const { title, desc, tech, image, repo } = projectContent[btn.id]

        let techHtml = '<div><h4>Tech Stack</h4><ul class="project_modal__tech">'
        tech.forEach((tech) => {
            techHtml += `<li>${tech}</li>`
        })
        techHtml += '</ul></div>'

        let imageHTML = ""
        image.forEach((img) => {
            imageHTML += `<img src="${img}" alt="">`
        })

        document.querySelector('.source_code__button').href = repo

        projectModalContent.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        ${techHtml}
        ${imageHTML}`

        modal.showModal()
    })
})

closeModal.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.close();
    })
})


const main = document.getElementsByTagName('main')[0];
const header = document.querySelector('header')
const logo = document.querySelector('.logo svg')
const headerLink = document.querySelectorAll('header a')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')

main.onscroll = function () {
    const scroll = main.scrollTop;
    const windowHeight = window.innerHeight;
    const headerHalf = header.offsetHeight / 2
    if (window.innerWidth > 480) {
        if ((scroll >= windowHeight - headerHalf && scroll < windowHeight + about.offsetHeight - headerHalf) ||
            (scroll >= windowHeight + about.offsetHeight + projects.offsetHeight - headerHalf)) {
            logo.style.fill = 'white';
            headerLink.forEach((link) => {
                link.style.color = 'white';
            });
        } else {
            logo.style.fill = 'black';
            headerLink.forEach((link) => {
                link.style.color = 'black';
            });
        }
    } else {
        headerLink.forEach((link) => {
            link.style.color = 'black';
        });
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el => observer.observe(el)))