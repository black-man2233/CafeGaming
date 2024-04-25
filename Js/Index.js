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
    // {
    //   title: "Minecraft",
    //   description: "Description for Event 5",
    //   date: "2022-05-01",
    //   image: "../Images/Minecraft.avif",
    // },
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
  
      eventCard.appendChild(eventImage);
      eventCard.appendChild(eventTitle);
      eventCard.appendChild(eventDescription);
      eventCard.appendChild(eventDate);
  
      eventContainer.appendChild(eventCard);
    }
  }
  
  // Call the function to insert all gaming events
  insertEvents();
  