import { getPeople } from './people/peopleDB.js'

const allPeople = getPeople()

for (const singlePeople of allPeople) {
    console.log(singlePeople)
}


// Import the FishList function from the correct module
import { PeopleList } from './people/peopleList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".people")


parentHTMLElement.innerHTML = PeopleList()


// //\/\/\/\/\/\/\/\/\/\/\/\/\/\\//


import { getCity } from './cities/citiesDB.js'

const allCity= getCity()

for (const singleCity of allCity) {
    console.log(singleCity)
}


// Import the FishList function from the correct module
import { CityList } from './cities/citiesList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

//     Use . for elements with a "class" attribute
//     Use # for elements with an "id" attribute
//  */
 const parentHTMLElement2 = document.querySelector(".cities")


parentHTMLElement2.innerHTML = CityList()


// // //\/\\/\/\/\/\\///\/\//\\//\/\/\/\/\/\/\
/*
 import { getLandmarks } from './landmarks/landmarksDB.js'

const allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}


// // Import the FishList function from the correct module
import { LandmarkList } from './landmarks/landmarkList.js'

// /*
//     What is the CSS selector for the element where you
//     want to display the fish?

//     Use . for elements with a "class" attribute
//     Use # for elements with an "id" attribute
//  */ 
/*
 const parentHTMLElement3 = document.querySelector(".landmarks")


parentHTMLElement3.innerHTML = LandmarkList() */