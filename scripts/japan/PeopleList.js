import {getPeople} from './people/peopleDB.js'

export const PeopleList = () => {
    // Invoke the function that you imported from the database module
    const peoples = getPeople()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="peopleList">'

    // Create HTML representations of each fish here
    for (const singlePeople of peoples) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="people">
            <div><img  class="people__image--card" src="${singlePeople.peopleImage}" /></div>
            <div class="people__name"> This is: ${singlePeople.peopleName} </div>
            <div class="people__info"> About Him: ${singlePeople.peopleInfo} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}