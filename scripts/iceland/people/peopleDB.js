const database = {
    people : [
        {
            peopleName: "Leif Erickson",
            peopleInfo: "Leif Erikson, a legendary Viking explorer born around 970 CE, is an iconic figure in Iceland's storied history. Revered for his adventurous spirit and seafaring prowess, Erikson's legacy offers a captivating glimpse into Iceland's rich heritage of exploration and discovery. He's celebrated for being one of the first Europeans to set foot on North American soil, long before Columbus. As you delve into the tales of Erikson's epic voyages, you'll find yourself drawn into a world of ancient mysteries and daring adventures, making it a must-explore aspect of Iceland's remarkable history. His enduring legacy invites you to step back in time and discover the audacious spirit that has long defined Icelandic exploration.",
            peopleImage: "https://sites.calvin.edu/adams/iceland/Week2/Week2-Images/11.jpg"
        },
        {
            peopleNameName: "Hafthor Julius Bjornsson",
            peopleInfo: "Hafthor Julius Bjornsson, affectionately known as 'The Mountain' from his iconic role in 'Game of Thrones,' is a towering cultural figure who beckons visitors to explore Iceland's unique blend of strength and charisma. Standing at over 6 feet 9 inches tall and renowned as one of the world's strongest men, Hafthor embodies Iceland's spirit of resilience and determination. His journey from humble beginnings to global stardom showcases the indomitable will and dedication that are quintessential Icelandic traits. For travelers seeking inspiration and a deeper connection with Iceland's modern culture, delving into Hafthor's incredible life story offers a captivating glimpse into the country's enduring pursuit of excellence and the allure of its remarkable people.",
            peopleImage: "https://giants-live.com/app/uploads/2022/01/thor.jpg"
        },
        {
            peopleName: "Emiliana Torrini",
            peopleInfo: "Emiliana Torrini, the enchanting Icelandic singer-songwriter, has woven her melodic tunes into the very fabric of Iceland's vibrant cultural scene. Her ethereal voice and poetic lyrics serve as a soothing soundtrack to the country's captivating landscapes and artistic spirit. Torrini's music resonates with the raw beauty of Iceland's nature, from the haunting melodies that echo through lava fields to the gentle rhythms inspired by the cascading waterfalls. For tourists seeking a more profound connection with Iceland's artistic soul, exploring the music of Emiliana Torrini is an enchanting journey that encapsulates the emotional depth and creativity that define this breathtaking land. It's a harmonious experience that adds a melodious dimension to any Icelandic adventure.",
            peopleImage: "https://cdns-images.dzcdn.net/images/artist/17b7fdd2890b0f39d09bfd88d70b6a9a/500x500.jpg"
        },
        {
            peopleName: "Olafur johann Olafsson",
            peopleInfo: "Olafur Johann Olafsson, a distinguished figure in Iceland's literary world, invites tourists to uncover the profound literary heritage that graces the country's cultural landscape. His compelling works of fiction and poetry are like windows into the Icelandic soul, offering a unique perspective on the nation's history, landscapes, and human experiences. Exploring Olafur Johann Olafsson's literary contributions during your visit not only deepens your understanding of Iceland's rich storytelling tradition but also immerses you in the imaginative realms crafted by this literary luminary. As you traverse the stunning landscapes that have inspired his words, you'll discover the power of storytelling to illuminate the heart and soul of Iceland, making your journey all the more enchanting and meaningful.",
            peopleImage: "https://www.islit.is/media/skrautmyndir/Olafur-Johann-Olafsson-2.jpg"
        }
    ]
}
export const getPeople = () => {
    return database.people.map(copyOfSinglePeopleObject => ({...copyOfSinglePeopleObject}))
}