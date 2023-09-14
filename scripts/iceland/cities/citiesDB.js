const database = {
    cities : [
        {
            cityName: "Reykjarik",
            cityInfo: "Nestled in the southwestern part of Iceland along the scenic Faxaflói Bay, Reykjavik stands as a captivating blend of history, culture, and natural beauty. This vibrant capital city, home to over a third of Iceland's population, boasts a rich heritage dating back to the 9th century. Reykjavik's cultural scene thrives with museums, galleries, theaters, and an array of festivals celebrating the nation's music, literature, and arts. Iconic landmarks like the Hallgrímskirkja, Harpa Concert Hall, and The Sun Voyager punctuate the cityscape, while the warm embrace of geothermal energy provides hot springs like the renowned Blue Lagoon. From traditional Icelandic cuisine to educational institutions like the University of Iceland, Reykjavik offers a dynamic travel experience. As the political epicenter of Iceland, it houses government institutions and, despite its urban setting, serves as a gateway to outdoor adventures like hiking and whale watching. Explore Reykjavik for an unforgettable encounter with Iceland's heart and soul.",
            cityImage: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/gettyimages-825428482.jpg?w=1600&h=900"
        },
        {
            cityName: "Akureyri",
            cityInfo: "In the northern reaches of Iceland, Akureyri invites travelers with its distinctive charm. As the country's second-largest city, it cradles a captivating blend of history and natural wonders. Akureyri's storied past unfolds amidst breathtaking fjords and majestic snow-capped mountains, setting the stage for exploration. The city's cultural scene thrives with a tapestry of festivals, art galleries, and a vibrant music community. Be sure to visit the striking Akureyrarkirkja church and meander through the enchanting cobblestone streets of the Old Town. Akureyri promises an authentic Icelandic experience with its inviting cafes, mouthwatering seafood delicacies, and the genuine hospitality of its residents. For adventure enthusiasts, hiking trails, winter skiing, and the chance to witness the captivating Northern Lights await in the surrounding landscapes. Akureyri beckons you to uncover a distinct facet of Iceland, where tradition seamlessly intertwines with the natural beauty of the North.",
            cityImage: "https://i0.wp.com/www.ladieswhattravel.com/wp-content/uploads/2019/03/Akureyri-Northern-Iceland-Ladies-What-Travel-12.jpeg?resize=960%2C720&ssl=1"
        },
        {
            cityName: "Hveragerdi",
            cityInfo: "Located amidst Iceland's geothermal wonders, Hveragerdi offers travelers an exceptional and revitalizing experience. This charming town has gained renown for its natural hot springs and geothermal activity, making it a sanctuary for relaxation and well-being. Wanderers can indulge in the therapeutic waters of Reykjadalur Hot Springs, situated in a picturesque valley that's accessible through a scenic hiking route. Hveragerdi also boasts a lush botanical garden that showcases an impressive array of plants thriving in the region's unique geothermal soil. As you explore this peaceful town, you'll uncover a profound connection between the local culture and the extraordinary natural environment. Hveragerdi serves as an oasis of serenity and an opportunity to immerse yourself in the geothermal embrace of Iceland.",
            cityImage: "https://totaliceland.com/wp-content/uploads/2012/03/Hveragerdi-Iceland1.jpg"
        },
        {
            cityName: "Selfoss",
            cityInfo: "Situated amidst Iceland's breathtaking scenery, Selfoss beckons travelers to a unique and invigorating encounter. This picturesque town is renowned for its serene atmosphere and its position as a portal to Iceland's natural marvels. Guests can relax in the tranquil embrace of the Olfusa River, which gracefully winds its way through the heart of Selfoss. The town also offers a window into Icelandic culture with its local boutiques, welcoming cafés, and a strong sense of community. As you traverse this peaceful town, you'll discover a profound bond between the local way of life and the extraordinary natural surroundings. Selfoss stands as an oasis of calm and an opportunity to immerse yourself in Iceland's captivating landscape",
            cityImage: "https://e498rczdjg6.exactdn.com/wp-content/uploads/2020/09/Selfoss-waterfall-2.jpg"
        },
        {
            cityName: "Stykkisholmur",
            cityInfo: "Perched on Iceland's northwestern coast, Stykkisholmur welcomes travelers to a captivating and rejuvenating experience. This coastal town is renowned for its idyllic charm and its role as a gateway to the Snæfellsnes Peninsula's wonders. Visitors can savor the fresh sea breeze and panoramic views from the town's iconic lighthouse, overlooking the pristine Breiðafjörður Bay. Stykkisholmur also boasts colorful, well-preserved 19th-century houses that add to its distinctive character. Exploring this tranquil town, you'll sense a deep connection between its maritime heritage and the untamed natural beauty of the surrounding seas and mountains. Stykkisholmur is a peaceful haven and an opportunity to immerse yourself in Iceland's coastal embrace.",
            cityImage: "https://www.expedia.com/Things-To-Do-In-Stykkisholmur.d9971.Travel-Guide-Activities?gallery-dialog=gallery-open"
        }
    ]
    }

export const getCity = () => {
    return database.cities.map(copyOfSingleCitiesObject => ({...copyOfSingleCitiesObject}))
}