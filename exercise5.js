let createProfile = (name, age, country, favoriteFood, isStudent) => {
    if (isStudent) {
        return name + " is a " + age + " year old student from " + country + " who loves " + favoriteFood + ".";
    } else {
        return name + " is a " + age + " year old from " + country + " who loves " + favoriteFood + " and is not a student.";
    }
};

let firstPerson = createProfile("Jacob", 20, "Kenya", "Fish", true);
let secondPerson = createProfile("Daniel", 29, "Nigeria", "Jollof rice", false);

console.log(firstPerson);
console.log(secondPerson);