function updateCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    var currentTimeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('currentTime').innerText = currentTimeString;
}

// Call updateCurrentTime to update the current time initially and every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);