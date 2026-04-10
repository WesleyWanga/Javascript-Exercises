let studentName= "Wesley";
let age= 17;
let country= "South Africa";
let course= "Software Engineering";
let hasPaidFees="false"

function checkEligibility(name, age, country, course, hasPaidFees) {
    if (age >= 18 && hasPaidFees === true) {
        return name + " the student is eligible to join the " + course + " course.";
    } else {
        return name + " the student is not eligible to join the " + course + " course.";
    }
}

let result = checkEligibility(studentName, age, country, course, hasPaidFees);
console.log(result);
