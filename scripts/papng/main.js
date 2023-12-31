import { getCity } from './cities/citiesDB.js'

const allCities = getCity()

for (const singleCity of allCities) {
    console.log(singleCity)
}

import { CityList } from './cities/cityList.js'

const parentHTMLElement1 = document.querySelector(".cities")

parentHTMLElement1.innerHTML = CityList()





import { getPeople } from './people/peopleDB.js'

const allPeople = getPeople()

for (const singlePeople of allPeople) {
    console.log(singlePeople)
}

import { PeopleList } from './people/PeopleList.js'


const parentHTMLElement2 = document.querySelector(".people")

parentHTMLElement2.innerHTML = PeopleList()





import { getLandmarks } from './landmarks/landmarksDB.js'

const allLandmarks = getLandmarks()

for (const singleLandmark of allLandmarks) {
    console.log(singleLandmark)
}

import { LandmarkList } from './landmarks/LandmarkList.js'


const parentHTMLElement3 = document.querySelector(".landmarks")


parentHTMLElement3.innerHTML = LandmarkList()