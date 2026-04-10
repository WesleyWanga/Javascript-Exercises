function createLearnerSummary() {

    // The nested functions
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

    // The storing of returned values
    let name = getName();
    let age = getAge();
    let language = getLanguage();
    let city = getCity();

    // The conditional check
    let learnerType;

    if (age >= 18) {
        learnerType = "an adult learner";
    } else {
        learnerType = "a young learner";
    }

    // The final sentence
    return name + " is " + learnerType + " from " + city + " who loves " + language + ".";
}
