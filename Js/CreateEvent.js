function createEvent() {
    // Get input values
    var eventName = document.getElementById("eventName").value;
    var eventDescription = document.getElementById("eventDescription").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventCreationSuccess = false;
    if (eventCreationSuccess) {
        alert("Event created successfully!");
    } else {
        alert("Event created unsuccessfully!");
        window.location.href = "../Pages/Events.html";
    }
}