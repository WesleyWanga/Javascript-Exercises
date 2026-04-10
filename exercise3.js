function showClubName() {
    console.log("Bayakhala Club");
}

function getClubName() {
    return "Ethereal Club";
}

let clubResult1 = showClubName();   // This will be undefined
let clubResult2 = getClubName();    // This will store "Ethereal Club"

console.log(clubResult1); // undefined
console.log(clubResult2); // Ethereal Club

function createClubMessage(clubName, meetingDay, isOpen) {
    if (isOpen) {
        return clubName + " it is meeting on " + meetingDay + ".";
    } 
    else  {
        return clubName + " it is currently closed.";
    }
}
