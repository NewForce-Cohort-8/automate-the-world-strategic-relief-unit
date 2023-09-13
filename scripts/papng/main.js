import { getCity } from './cities/citiesDB.js'

const allCities = getCity()

for (const singleCity of allCities) {
    console.log(singleCity)
}

import { CityList } from './cities/cityList.js'

const parentHTMLElement = document.querySelector(".city")

parentHTMLElement.innerHTML = CityList()