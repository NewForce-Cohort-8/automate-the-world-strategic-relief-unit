



const database = {
    
    landmarks: [
        {
            landmarkName:"THE GREAT BARRIER REEF",
            landmarkInfo:"The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc. It also holds great scientific interest as the habitat of species such as the dugong (sea cow) and the large green turtle, which are threatened with extinction.",
            landmarkImage:"https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg"
        },            
        {
            landmarkName:"THE BUSH",
            landmarkInfo:"a colloquial term used among Australians to describe the backwoods or hinterland areas that are just outside the coastal areas of Australia. In fact, many Australians understand “the bush” as more of a feeling than a specific place.",
            landmarkImage:"https://www.collinsdictionary.com/images/full/bush_132902558.jpg"
        },            
        {
            landmarkName:"ULURU",
            landmarkInfo:"How big is Uluru? How tall and wide is Uluru? Where is Uluru? What is Uluru made of? This special iconic place invokes so many questions",
            landmarkImage:"https://upload.wikimedia.org/wikipedia/commons/a/a8/ULURU.jpg"
        },
        {
            landmarkName:"SYDNEY OPERA HOUSE",
            landmarkInfo:"The Sydney Opera House constitutes a masterpiece of 20th century architecture. Its significance is based on its unparalleled design and construction; its exceptional engineering achievements and technological innovation and its position as a world-famous icon of architecture.",
            landmarkImage:"https://wiki.swganh.org/images/b/b5/Vrenitheater_corellia.jpg"
        },
    ]
}


export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}