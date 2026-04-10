let travelerName = "Wesley";
let destination = "Melbourne";
let month = "May";
let hasPassport = true;

let createTravelPlan = function(name, destination, month, hasPassport) {
    if (hasPassport) {
        return name + " can travel to " + destination + " in " + month + ". The trip is possible.";
    } else {
        return name + " cannot travel to " + destination + " yet.";
    }
};

let travelResult = createTravelPlan(travelerName, destination, month, hasPassport);

console.log(travelResult);

