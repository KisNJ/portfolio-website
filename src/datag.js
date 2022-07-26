const data = [
  {
    id: 0,
    img: "./imgs/weatherApp.png",
    description:
      "In this project I used the 'OpenWeather' api. I learned how to use apis in React. And there is a section which let's you find cities that are named the same.",
    title: "Weather App",
  },
  {
    id: 1,
    img: "./imgs/whereIsWaldo.PNG",
    description: `This project uses Firebase as backend.
      The hardest part of the project was dealing with Firebase security rules.
      Especially measuring the elapsed time because cloud funcitons are not part of the free tier.`,
    title: "Where is Waldo?",
  },
  {
    id: 2,
    img: "./imgs/todoList.PNG",
    description: `This was one of my 
    first serious React project. I learned
     in this project form managemant and 
     syncronising data
     between components. And this project
      showed me why I should consider 
      using Typescript.`,
    title: "ToDo App",
  },
  {
    id: 3,
    img: "./imgs/battleship.PNG",
    description: `This projecet was all about game logic. First I had to place ships randomly for the player and the AI. I had to consider the ship's orientation and that it can't collide with another.
      I also added a drag-and-drop ship placament to the player, for that I used react-dnd library.`,
    title: "Battleship Game",
  },
  {
    id: 4,
    img: "./imgs/memoryCard.PNG",
    description: `In this game you have to click card you haven't clicked yet. After I downloaded the pictures for the card I used an excel to JSON converter for my data file. I also had to make sure that I always show at least one card the player hasn't clicked.`,
    title: "Memory Card",
  },
  {
    id: 5,
    img: "./imgs/cv.PNG",
    description: `This project is mainly about design. I get data in my input fields and then I display it in a formatted way.`,
    title: "CV creator site",
  },
  {
    id: 6,
    img: "./imgs/gameReview.PNG",
    description: `My "Final" js project. I used the Mantine UI library. The site has a x/5 start rating system. The site useses firebase authentication and firestore.
      The site also has a reddit style commment section with multiple layers of comments. However the site is not production ready due to strange security rules. I hope MongoDB is better than Firebase. Firebase is just clunky to use e.g why can't I just copy files or create one in a normal text editor and securtiy rules debugging with real value doesn't exist.`,
    title: "Game Reviews",
  },
  {
    id: 7,
    img: "./imgs/pcShop.PNG",
    description: `The project utilises react-router-dom. It also includes state managemant and image animation.`,
    title: "Shopping Cart",
  },
];
export default data;
