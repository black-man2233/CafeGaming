// Array of gaming events
var events = [
  {
    title: "Call of Duty",
    description: "Description for Event 1",
    date: "2022-01-01",
    image: "../Images/cod.jpg",
  },
  {
    title: "Warzone",
    description: "Description for Event 2",
    date: "2022-02-01",
    image: "../Images/warzone.avif",
  },
  {
    title: "League of legends",
    description: "Description for Event 3",
    date: "2022-03-01",
    image: "../Images/lol.jpg",
  },
  {
    title: "Roblox",
    description: "Description for Event 4",
    date: "2022-04-01",
    image: "../Images/Roblox.png",
  },
];

// Function to generate random gaming events
function insertEvents() {
  var eventContainer = document.querySelector(".event-container");
  eventContainer.innerHTML = "";

  for (var i = 0; i < events.length; i++) {
    var currentEvent = events[i];

    var eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    var eventImage = document.createElement("img");
    eventImage.classList.add("event-image");
    eventImage.src = currentEvent.image;
    eventImage.alt = "Event Image";
    eventImage.style.width = "100%";
    eventImage.style.height = "100%";
    eventImage.style.objectFit = "cover";

    var eventTitle = document.createElement("h1");
    eventTitle.classList.add("event-title");
    eventTitle.textContent = currentEvent.title;

    var eventDescription = document.createElement("p");
    eventDescription.classList.add("event-description");
    eventDescription.textContent = currentEvent.description;

    var eventDate = document.createElement("p");
    eventDate.classList.add("event-date");
    eventDate.textContent = currentEvent.date;

    var readMoreButton = document.createElement("button");
    readMoreButton.classList.add("readMoreEventButton");
    readMoreButton.textContent = "Read More";

    eventCard.appendChild(eventImage);
    eventCard.appendChild(eventTitle);
    eventCard.appendChild(eventDescription);
    eventCard.appendChild(eventDate);
    eventCard.appendChild(readMoreButton);

    eventContainer.appendChild(eventCard);
  }
}

// Call the function to insert all gaming events
insertEvents();

// import mysql from "mysql2";

// Sign up / Sign in handler
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  TestDataBase();
});

function TestDataBase() {
  // Create a connection pool to the MySQL database
  const express = require("express");
  const mysql = require("mysql2");
  const app = express();

  const connection = mysql.createConnection({
    host: "sql.itcn.dk",
    host: "127.0.0.1",
    user: "kevi3758.SKOLE",
    password: "83f8HrA3wQ",
    database: "kevi37582.SKOLE",
  });

  connection.connect(function (err) {
    if (err) {
      console.error("Error connecting to MySQL database: " + err.stack);
      return;
    }
    console.log("Connected to MySQL database as id " + connection.threadId);
  });

  app.get('/data', (req, res) => {
    connection.query('SELECT * FROM your_table', (error, results, fields) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.json(results);
      }
    });
  });

  
}
