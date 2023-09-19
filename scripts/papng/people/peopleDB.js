const database = {

    people : [
           
        {
            peopleName: "Chambri Tribe (Crocodile Men)",
            peopleInfo: "The Chambri Tribe of the Sepik region of Papua New Guinea are also known as the Crocodile Men, as they aspire to be at one with the crocodile. One of the important events in the life of a boy of the tribe is the painful ritual of etching cuts into the skin with sharpened bamboo, resulting in scars that resemble crocodile skin. This ritual is believed to give the boy the strength and protection of the crocodile.",
            peopleImage: "https://manvsclock.com/wp-content/uploads/Tribal-tattoo-Sepik-River-Papua-New-Guinea.jpeg"
        },
        {
            peopleName: "Baining Tribe",
            peopleInfo: 'The Baining Tribe who live in the Baining Mountains are known for their artwork and elaborate masks. They use these masks during traditional night dance ceremonies, called "fire dances", in which the dancers run through, leap over, and kick the embers of fire.',            
            peopleImage: "https://manvsclock.com/wp-content/uploads/Baining-Papua-New-Guinea-tribespeople.jpeg"
        },
        {
            peopleName: "Korowai Tribe",
            peopleInfo: "The Korowai have been reported to practice ritual cannibalism up to the present day. Anthropologists suspect that cannibalism is no longer practiced by the Korowai clans that have had frequent contact with outsiders. Recent reports suggest that certain clans have been coaxed into encouraging tourism by perpetuating the myth that cannibalism is still an active practice. Members of the Momuna tribe, a sister tribe of the Korowai, whose tribe does not engage in cannibalism, have stated that the Korowai practice cannibalism as a form of punishment rather than for ritualistic purposes.",           
            peopleImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/KorowaiHombre01.jpg/250px-KorowaiHombre01.jpg"
        },
    ]
}
export const getPeople = () => {
    return database.people.map(copyOfSinglePeopleObject => ({...copyOfSinglePeopleObject}))
}