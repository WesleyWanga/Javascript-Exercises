function createLearnerSummary() {

    // Nested functions
    function getName() {
        return "Wesley";
    }

    function getAge() {
        return 25;
    }

    function getLanguage() {
        return "JavaScript";
    }

    function getCity() {
        return "Nairobi";
    }

    // Store returned values
    let name = getName();
    let age = getAge();
    let language = getLanguage();
    let city = getCity();

    // Conditional check
    let learnerType;

    if (age >= 18) {
        learnerType = "an adult learner";
    } else {
        learnerType = "a young learner";
    }

    // Final sentence
    return name + " is " + learnerType + " from " + city + " who loves " + language + ".";
}
