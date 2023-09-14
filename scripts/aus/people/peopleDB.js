

const database = {
    people: [
        {
            peopleName:"STEVE IRWIN",
            peopleInfo:"Crocodile Hunter.",
            peopleImage:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Steve_Irwin.jpg"
        },            
        {
            peopleName:"MEN AT WORK",
            peopleInfo:"From the land down under. Enjoy Vegimite sandwhiches.",
            peopleImage:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Men_At_Work_1983.jpg"
        },            
        {
            peopleName:"MEL GIBSON",
            peopleInfo:"actor",
            peopleImage:"https://static.simpsonswiki.com/images/thumb/7/73/Mel_Gibson.png/250px-Mel_Gibson.png"
        },
        {
            peopleName:"MARGO ROBBIE",
            peopleInfo:"a barbie girl",
            peopleImage:"https://akns-images.eonline.com/eol_images/Entire_Site/20071207/293.kidman.cruise3.120707.jpg?fit=around%7C776:auto&output-quality=90&crop=776:auto;center,top"
        },
        {
            peopleName:"HEATH LEDGER",
            peopleInfo:"Why so serious?",
            peopleImage:"https://static.wikia.nocookie.net/batman/images/3/3e/Jack_Nicholson_As_The_Joker.jpg/revision/latest?cb=20180101142215"
        },
        {
            peopleName:"LORD HUMUNGUS",
            peopleInfo:"Leave the pump, the oil, the gasoline, and the whole compound, and I spare your lives. Just walk away. I will give you safe passage in the wasteland. Just walk away and there will be an end to the horror.",
            peopleImage:"https://images.squarespace-cdn.com/content/v1/5c4a8a039d5abb1c6436f0f5/1548526003545-SAJYHD1210PMM2RIHJIJ/_DSC4486.jpg?format=1500w"
        },
        {
            peopleName:"CROCODILE DUNDEE",
            peopleInfo:"You call that a knife?",
            peopleImage:"https://i.guim.co.uk/img/media/8c5d882b8501dda8499819d8cc98f6e13fb6c433/0_0_3264_2119/master/3264.jpg?width=465&dpr=1&s=none"
        },
        {
            peopleName:"THE NOBLE PLATYPUS",
            peopleInfo:"a naturally occuring abominatiion",
            peopleImage:"https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png"
        },
    ]
}
export const getPeople = () => {
    return database.people.map(copyOfSinglePersonObject => ({...copyOfSinglePersonObject}))
}