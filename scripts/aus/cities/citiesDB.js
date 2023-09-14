

const database = {
    
        cities: [
            {
                cityName:"BARTERTOWN",
                cityInfo:"Bartertown is a remote market-town outpost situated in the midst of the Wasteland. Its primary focus and income is the trade and bartering with scavengers in the area, and travelers passing through.",
                cityImage:"https://i0.wp.com/thelegalgeeks.com/wp-content/uploads/2020/08/Thunderdom_01.png?w=975&ssl=1"

            },
            {
                cityName:"SYDNEY",
                cityInfo:"Sydney is the capital city of the state of New South Wales, and the most populous city in Australia",
                cityImage:"https://www.travelandleisure.com/thmb/6JVbKFFtu7AeQu5rHioeDpcPxko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sydney-australia-SYDNEYTG0621-2dcacc38417541f689e293d397da9eaf.jpg"
            },            
            {
                cityName:"MELBOURNE",
                cityInfo:"Melbourne is in the southeastern part of mainland Australia, within the state of Victoria. Geologically, it is built on the confluence of Quaternary lava flows",
                cityImage:"https://www.celebritycruises.com/blog/content/uploads/2022/12/best-beaches-in-melbourne-australia-brighton-beach-hero.jpg"
            },
        ]
}
export const getCity = () => {
    return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}   