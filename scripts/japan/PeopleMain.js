import { getPeople } from './peopleDB.js'

const allPeople = getPeople()

for (const singlePeople of allPeople) {
    console.log(singlePeople)
}


// Import the FishList function from the correct module
import { PeopleList } from './PeopleList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".people")


parentHTMLElement.innerHTML = PeopleList()
