const findTheOldest = function(people) {
    let ages = people.sort(function(persona, personb) {
        const currentYear = new Date().getFullYear();
        let agea, ageb = 0;
        if ("yearOfDeath" in persona) {
            agea = persona.yearOfDeath - persona.yearOfBirth;
        }
        else {
            agea = currentYear - persona.yearOfBirth;
        }
        if ("yearOfDeath" in personb) {
            ageb = personb.yearOfDeath - personb.yearOfBirth;
        }
        else {
            ageb = currentYear - personb.yearOfBirth;
        }
        return agea > ageb ? -1 : 1;
    })

    return people[0];
}

// Do not edit below this line
module.exports = findTheOldest;
