const database = {
   cities : [
       {
           cityName: "Tokyo",
           cityInfo: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
           cityImage: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/akihabara-iStock-484915982-1024x600.jpg"
       },
       {
           cityName: "Kyoto",
           cityInfo: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
           cityImage: "https://www.tripsavvy.com/thmb/e5wZDX6HW-JmfA8Yu0KEbCZ3zLo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-530105220-5c337bae46e0fb00012fcdfb.jpg"
       },
       {
           cityName: "Osaka",
           cityInfo: "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food. The 16th-century shogunate Osaka Castle, which has undergone several restorations, is its main historical landmark. It's surrounded by a moat and park with plum, peach and cherry-blossom trees. Sumiyoshi-taisha is among Japan’s oldest Shinto shrines.",
           cityImage: "https://img.itinari.com/pages/images/original/0afe2310-ecf1-42ae-ba94-c6d9276d858b-istock-522473665.jpg?ch=DPR&dpr=2.625&w=1600&s=43a44f534ff621b768e852f9f2c8cf3e"
       },
       {
           cityName: "Nagoya",
           cityInfo: "Nagoya, capital of Japan’s Aichi Prefecture, is a manufacturing and shipping hub in central Honshu. The city’s Naka ward is home to museums and pachinko (gambling machine) parlors. Naka also includes the Sakae entertainment district, with attractions like the Sky-Boat Ferris wheel, which is attached to a mall. In northern Naka is Nagoya Castle, a partly reconstructed 1612 royal home displaying Edo-era artifacts.",
           cityImage: "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2019/02/nagoya-city-1024x684.jpg"
       },
       {
           cityName: "Hiroshima",
           cityInfo: "Hiroshima, a modern city on Japan’s Honshu Island, was largely destroyed by an atomic bomb during World War II. Today, Hiroshima Peace Memorial Park commemorates the 1945 event. In the park are the ruins of Genbaku Dome, one of the few buildings that was left standing near ground zero. Other prominent sites include Shukkei-en, a formal Japanese garden, and Hiroshima Castle, a fortress surrounded by a moat and a park.",
           cityImage: "https://a.cdn-hotels.com/gdcs/production186/d158/18e810d1-293d-4153-bfad-99b1c100d178.jpg?impolicy=fcrop&w=800&h=533&q=medium"
       }
   ]
}

export const getCity = () => {
   return database.cities.map(copyOfSingleCityObject => ({...copyOfSingleCityObject}))
}