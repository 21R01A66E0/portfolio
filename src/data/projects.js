import obesityImage from "../assets/projectImages/obesity.png";
import tictactoeGameImage from "../assets/projectImages/tictactoe.png";
import randomChatImage from "../assets/projectImages/randomChatImage.png";
const projects=[
    {projectImage:randomChatImage,title:"RandomChat-Application",discription:"A real-time chat application where users are randomly paired in 1-on-1 chat or video sessions. It supports infinite connections in parallel (up to 2 users per room) without storing any personal or chat data. Built with WebRTC, Socket.IO, and Node.js to ensure fast, anonymous communication.",techStack:"HTML  CSS  NodeJs  WebRTC  Socket.io",projectLink:"https://random-chatorvideochat-webapplication.onrender.com"},
    {projectImage:obesityImage,title:"Obesity-Check-application",discription:"A responsive web application where users can register or log in, input their weight (kg) and height (m) to calculate BMI and assess obesity levels. Based on the result, it provides personalized health tips, motivational videos, and guidance for overcoming obesity. User information is stored locally using LocalStorage to maintain session continuity without the need for a backend.",techStack:"HTML  CSS  JavaScript",projectLink:"https://obesitywebsite.netlify.app/"},
    {projectImage:tictactoeGameImage,title:"tic-tac-toe-game",discription:"An interactive Tic Tac Toe web game that allows players to choose between classic 3x3 and advanced 6x6 grid modes via a slider. Players can seamlessly switch and play their preferred version with intuitive UI. The game is designed with responsive design principles and includes winning logic for both grid types.",techStack:"HTML  CSS  JavaScript",projectLink:"https://21r01a66e0-tic-tac-toe-game.netlify.app/"}
]

export default projects;