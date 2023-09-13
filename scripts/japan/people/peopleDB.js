const database = {
    people : [
        {
            peopleName: "Shigeru Miyamoto",
            peopleInfo: "Shigeru Miyamoto is a Japanese video game designer, producer and game director at Nintendo, where he serves as one of its representative directors as an executive since 2002.",
            peopleImage: "https://www.videogameschronicle.com/files/2021/03/Super-Nintendo-World-miyamoto-.jpg"
        },
        {
            peopleName: "Akira Yamaoka",
            peopleInfo: "Akira Yamaoka is a Japanese composer and music producer. He is best known for composing music for several video games in the Silent Hill series by Konami, among other games. Yamaoka also worked as a producer on the series, as well as composing for the Silent Hill film and its sequel.",
            peopleImage: "https://www.nme.com/wp-content/uploads/2020/10/Akira-Yamaoka-photo@2000x1270.jpg"
        },
        {
            peopleName: "Godzilla",
            peopleInfo: "Godzilla is a fictional monster, or kaiju, that debuted in the eponymous 1954 film, directed and co-written by Ishirō Honda.",
            peopleImage: "https://cdn.theatlantic.com/thumbor/mNuRZAZANk_5TPGZlp2nzeZAcx0=/0x0:1643x924/960x540/media/img/mt/2019/05/MBDGODZ_EC005_1/original.jpg"
        },
        {
            peopleName: "Keiichi Tsuchiya",
            peopleInfo: "Keiichi Tsuchiya is a Japanese professional race car driver. He is known as the Drift King for his nontraditional use of drifting in non-drifting racing events and his role in popularizing drifting as a motorsport.",
            peopleImage: "https://cdn.worldtimeattack.com/2016/05/02150924/10398070_937432429671511_7697286007072560732_n.jpg"
        }
    ]
}
export const getPeople = () => {
    return database.people.map(copyOfSinglePeopleObject => ({...copyOfSinglePeopleObject}))
}