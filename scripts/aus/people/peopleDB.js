const database = {
    
    people: [
        {
            personName:"STEVE IRWIN",
            blurb:"Crocodile Hunter.",
            image:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Steve_Irwin.jpg"
        },            
        {
            personName:"MEN AT WORK",
            blurb:"From the land down under. Enjoy Vegimite sandwhiches.",
            image:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Men_At_Work_1983.jpg"
        },            
        {
            personName:"MEL GIBSON",
            blurb:"actor",
            image:"https://static.simpsonswiki.com/images/thumb/7/73/Mel_Gibson.png/250px-Mel_Gibson.png"
        },
        {
            personName:"MARGO ROBBIE",
            blurb:"a barbie girl",
            image:"https://akns-images.eonline.com/eol_images/Entire_Site/20071207/293.kidman.cruise3.120707.jpg?fit=around%7C776:auto&output-quality=90&crop=776:auto;center,top"
        },
        {
            personName:"HEATH LEDGER",
            blurb:"Why so serious?",
            image:"https://static.wikia.nocookie.net/batman/images/3/3e/Jack_Nicholson_As_The_Joker.jpg/revision/latest?cb=20180101142215"
        },
        {
            personName:"LORD HUMUNGUS",
            blurb:"Leave the pump, the oil, the gasoline, and the whole compound, and I spare your lives. Just walk away. I will give you safe passage in the wasteland. Just walk away and there will be an end to the horror.",
            image:"https://images.squarespace-cdn.com/content/v1/5c4a8a039d5abb1c6436f0f5/1548526003545-SAJYHD1210PMM2RIHJIJ/_DSC4486.jpg?format=1500w"
        },
        {
            personName:"CROCODILE DUNDEE",
            blurb:"You call that a knife?",
            image:"https://i.guim.co.uk/img/media/8c5d882b8501dda8499819d8cc98f6e13fb6c433/0_0_3264_2119/master/3264.jpg?width=465&dpr=1&s=none"
        },
        {
            personName:"THE NOBLE PLATYPUS",
            blurb:"a naturally occuring abominatiion",
            image:"https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png"
        },
    ]
}

/* let myPeople= ""

for(i=0; i < database.people.length; i++){
    myPeople=(myPeople[i]);
} */

export const getPeople = () => {
    return database.people.map(copyOfSinglePersonObject => ({...copyOfSinglePersonObject}))
}