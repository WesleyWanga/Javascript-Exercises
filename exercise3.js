function showClubName() {
    console.log("Bayakhala Club");
}

function getClubName() {
    return "Ethereal Club";
}

let clubResult1 = showClubName();   
let clubResult2 = getClubName();    

console.log(clubResult1); 
console.log(clubResult2); 

function createClubMessage(clubName, meetingDay, isOpen) {
    if (isOpen) {
        return clubName + " it is meeting on " + meetingDay + ".";
    } 
    else  {
        return clubName + " it is currently closed.";
    }
}
