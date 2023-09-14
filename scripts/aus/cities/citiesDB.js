

const database = {
    
        cities: [
            {
                cityName:"BARTERTOWN",
                cityInfo:"Bartertown is a remote market-town outpost situated in the midst of the Wasteland. Its primary focus and income is the trade and bartering with scavengers in the area, and travelers passing through.",
                cityImage:"https://static.wikia.nocookie.net/roadwarrior/images/8/8e/Thunderdome.png/revision/latest?cb=20150716040731"
            },            {
                cityName:"SYDNEY",
                cityInfo:"Sydney is the capital city of the state of New South Wales, and the most populous city in Australia",
                cityImage:"https://ontheworldmap.com/australia/city/sydney/sydney-location-on-the-australia-map.jpg"
            },            {
                cityName:"MELBOURNE",
                cityInfo:"Melbourne is in the southeastern part of mainland Australia, within the state of Victoria. Geologically, it is built on the confluence of Quaternary lava flows",
                cityImage:"https://www.celebritycruises.com/blog/content/uploads/2022/12/best-beaches-in-melbourne-australia-brighton-beach-hero.jpg"
            },
        ]
}
export const getCity = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}   