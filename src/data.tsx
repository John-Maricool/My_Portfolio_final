import {
  Link,
  QR,
  Weather,
  Hire,
  Blogy,
  Client,
  Client1,
  Client2,
  Client3,
  master,
  should,
  sushi,
  LMSY,
  arch,
  solid,
  Diety,
  Note,
  port,
  learn,
} from "./assets";
interface Prof {
  id: number;
  image: string;
  para: string;
  title: string;
  hosted: string;
  github: string;
}
interface Profy {
  id: number;
  image: string;
  para: string;
}
export const myData: Prof[] = [
  {
    id: 1,
    image: Link,
    para: "This is a link shortening website built with HTML, CSS, JavaScript and Shrtcode API",
    title: "Link Shortner",
    hosted: "https://nky237.github.io/Team2/",
    github: "https://nky237.github.io/Team2/",
  },
  {
    id: 2,
    image: QR,
    para: "This is a QR generator website built with html, boostrap, css ",
    title: "QR Generator",
    hosted: "https://jhenna-qrgenerator.netlify.app/",
    github: "https://github.com/Nky237/QR-generator.git",
  },
  {
    id: 3,
    image: Weather,
    para: "An app built with HTML, CSS, Javascript and weather API",
    title: "WEATHER APP",
    hosted: "https://nky237.github.io/weather/index.html",
    github: "https://github.com/Nky237/weather.git",
  },
  {
    id: 4,
    image: Hire,
    para: "A website where you can book an event. It was created with HTML, boostrap, css, javascript and nodejs",
    title: "HIRE",
    hosted: "https://kodehire.netlify.app/",
    github: "https://github.com/Nky237/Hire.git",
  },
  {
    id: 5,
    image: Blogy,
    para: "A netflix clone done with HTNl,CSS, Javascript and swiperJS",
    title: "NETFLIX",
    hosted: "https://janenetlify.netlify.app/",
    github: "https://github.com/Nky237/Netflix-clone.git",
  },
  {
    id: 6,
    image: port,
    para: "My portfolio done with HTML, Javascript, CSS, formOnSubmit and swiperjs",
    title: "PORTFOLIO",
    hosted: "https://html-portfolio-two.vercel.app/",
    github: "https://github.com/Nky237/HTML_Portfolio.git",
  },
];
export const myData2: Prof[] = [
  {
    id: 1,
    image: LMSY,
    para: "A Learning Management System done with ReactJS, Module CSS, MongoDB and NodeJS ",
    title: "LEARNING MANAGEMENT SYSTEM",
    hosted: "https://learnz.vercel.app/",
    github: "https://github.com/learnable-2022/LMS-YC-2-FE.git",
  },

  {
    id: 2,
    image: Note,
    para: "A notepad done with ReactJS and CSS ",
    title: "NOTEPAD",
    hosted: "https://note-pad-with-react-js.vercel.app/",
    github: "https://github.com/Nky237/NotePad-with-ReactJs.git",
  },
  {
    id: 3,
    image: Diety,
    para: "A diet App used for checking weight done with Reactjs and CSS",
    title: "DIET APP",
    hosted: "https://diet-plan-app.vercel.app/",
    github: "https://github.com/Bukason20/Diet-plan-app.git",
  },
  {
    id: 4,
    image: sushi,
    para: "A website where you can order any meal of your choice done with ReactJs and CSS",
    title: "SUSHI APP",
    hosted: "https://sushi-app-cyan.vercel.app/",
    github: "https://github.com/Nky237/Sushi-App.git",
  },
  // {
  //   id: 5,
  //   image: Blogy,
  //   para: "lorem",
  // },
];
export const myData3: Prof[] = [
  {
    id: 1,
    image: arch,
    para: "An article writeen on architectural patterns",
    title: "Architectural Patterns in Mobile Development",
    hosted:
      "https://medium.com/@ebukaikenwa/architectural-patterns-in-mobile-development-81ea74943a4?source=user_profile---------0----------------------------",
    github: "#",
  },
  {
    id: 2,
    image: master,
    para: "An article written on best practices in coding.",
    title: "Mastering Coding Best Practices: A Comprehensive Guide for Developers",
    hosted:
      "https://medium.com/@ebukaikenwa/mastering-coding-best-practices-a-comprehensive-guide-for-developers-b6d1f630465c",
    github: "#",
  },
  {
    id: 3,
    image: solid,
    para: "An article written on SOLID principles",
    title: "Mastering SOLID: A Guide to Writing Maintainable Code",
    hosted:
      "https://medium.com/@ebukaikenwa/mastering-solid-a-guide-to-writing-maintainable-code-410987c815b8",
    github: "#",
  },
  {
    id: 4,
    image: learn,
    para: "An article written on learning Android ddevelopment",
    title: "Learning Pathway for Android development.",
    hosted:
      "https://medium.com/@ebukaikenwa/learning-pathway-for-android-development-12dfd7227464",
    github: "#",
  },
  {
    id: 5,
    image: should,
    para: "An article written on the best ways to learn coding",
    title: "Should I learn coding on my own or through a Bootcamp/online course?",
    hosted:
      "https://medium.com/@ebukaikenwa/should-i-learn-coding-on-my-own-or-through-a-bootcamp-online-course-97ada005388b",
    github: "#",
  },
];

export const MyTes: Profy[] = [
  {
    id: 1,
    image: Client,
    para: "I am so happy with the result, he was super quick, understood everything I needed and delivered exactly what I wanted. I'm a developer myself and I can see based on the code he wrote that he is a highly skilled Android Dev. Someone who is actually good at Jetpack Compose! Would recommend 10/10.",
  },
  {
    id: 2,
    image: Client1,
    para: "Ebuka is a developer with great skills. Great communication and always ready to give his input on improving app.",
  },
  {
    id: 3,
    image: Client3,
    para: "Good work again. this is 3rd time i work with him."
    },
  {
    id: 4,
    image: Client2,
    para: "Ebuka approach the job with skill, it looked simple, but when jsk issues came up, he handled it. Would keep intouch for future projects.",
  },
  // {
  //   id: 5,
  //   image: Client3,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 6,
  //   image: Client2,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 7,
  //   image: Client3,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
  // {
  //   id: 8,
  //   image: Client2,
  //   para: "        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis inventore laboriosam qui eum quo, repellat quae omnis at, repudiandae ipsum sit aut? Sapiente atque minus deserunt aut rem officia repudiandae.",
  // },
];
