const database = {

    cities : [
           
        {
            cityName: "Port Moresby",
            cityInfo: "As the capital city of the country of Papua New Guinea, Port Moresby is the most populous city.", 
            cityImage: "https://statemag.state.gov/wp-content/uploads/2021/04/0521POM-24.jpg"
        },
        {
            cityName: "Lae",
            cityInfo: "Lae is the second-most populous city in Papua New Guinea.",
            cityImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhjmzWk_kLlAvUNhI7GXWSIS3Qg3iOdV4T5L40abc67MZa4iwxn-i5r36fWGJaovCJ28&usqp=CAU"
        },
        {
            cityName: "Mount Hagen",
            cityInfo: "Mount Hagen is the third-most populous city in Papua New Guinea.",
            cityImage: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQRt7t1S4wMeWWzO99G6UxiiXVnCbaUKJIcckQfgFt9DUTm4bx9eebwIu9NevFQ7NR6JSx2hsRYIoWsT3rUm0f6GkcbOw7f"
        },
    ]
   
}
    // let myCity= ""
    
    // for(i=0; i < database.cities.length; i++){
    //     myCity=(myCity[i]);
    // }
    
    export const getCity = () => {
        return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
    }   