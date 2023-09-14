import {getLandmarks} from './landmarksDB.js'

export const LandmarkList = () => {
    // Invoke the function that you imported from the database module
    const landmarks = getLandmarks()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="landmarkList">'

    // Create HTML representations of each fish here
    for (const singleLandmark of landmarks) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="landmarks">
            <div><img  class="landmark__image--card" src="${singleLandmark.landmarkImage}" /></div>
            <div class="landmark__name"> This is: ${singleLandmark.landmarkName} </div>
            <div class="landmark__info"> About : ${singleLandmark.landmarkInfo} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}