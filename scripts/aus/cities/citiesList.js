import {getCity} from '../cities/citiesDB.js'

export const CityList = () => {
    // Invoke the function that you imported from the database module
    const cities = getCity()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="cityList">'

    // Create HTML representations of each fish here
    for (const singleCity of cities) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="city">
            <div><img  class="city__image--card" src="${singleCity.cityImage}" /></div>
            <div class="city__name"> This is: ${singleCity.cityName} </div>
            <div class="city__info"> About : ${singleCity.cityInfo} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}