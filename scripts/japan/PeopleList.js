import {getPeople} from './peopleDB.js'

export const PeopleList = () => {
    // Invoke the function that you imported from the database module
    const peoples = getPeople()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const singlePeople of peoples) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishcard">
            <div><img  class="fish__image--card" src="${singlePeople.image}" /></div>
            <div class="fish__name"> Hi I'm ${singlePeople.name} </div>
            <div class="fish__species"> I am from the ${singlePeople.species} family </div>
            <div class="fish__length"> I am ${singlePeople.length} long</div>
            <div class="fish__location">I come from ${singlePeople.location}</div>
            <div class="fish__diet">I like to eat ${singlePeople.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}