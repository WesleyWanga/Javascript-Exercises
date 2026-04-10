function showClubName() {
    console.log("Bayakhala Club");
}

function getClubName() {
    return "Ethereal Club";
}

let firstClubResult = showClubName();   
let secondClubResult = getClubName();    

console.log(firstClubResult); 
console.log(secondClubResult); 

function createClubMessage(clubName, meetingDay, isOpen) {
    if (isOpen) {
        return clubName + " it is meeting on " + meetingDay + ".";
    } 
    else  {
        return clubName + " it is currently closed.";
    }
}
