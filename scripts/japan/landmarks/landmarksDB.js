const database = {
    landmarks : [
        {
            landmarkName: "Mount Fuji",
            landmarkInfo: "With its wide stature and snow-capped peak, Mount Fuji is immediately recognizable at a glance. This beautiful mountain near Tokyo has become a symbol of Japan.",
            landmarkImage: "https://img.theculturetrip.com/1020x/wp-content/uploads/2021/12/filiz-elaerts-j_c3_jpjmms-unsplash.jpg"
        },
        {
            landmarkName: "Himeji Castle",
            landmarkInfo: "Himeji Castle is Japan’s most famous castle and one of the best surviving examples of feudal Edo architecture.",
            landmarkImage: "https://img.theculturetrip.com/1020x/wp-content/uploads/2021/04/fb220b-1-e1619528753302.jpg"
        },
        {
            landmarkName: "Fushimi Inari Shrine",
            landmarkInfo: "Fushimi Inari Taisha is a shrine in Kyoto. The long path of brightly colored torii leading up to the shrine has been featured in countless films.",
            landmarkImage: "https://img.theculturetrip.com/1020x/wp-content/uploads/2020/11/mg_1535.jpg"
        },
        {
            landmarkName: "Tokyo Tower",
            landmarkInfo: "Tokyo’s original tower landmark will always be the one and only to some.",
            landmarkImage: "https://img.theculturetrip.com/1020x/wp-content/uploads/2022/12/louie-martinez-iocjwyqrv3m-unsplash.jpg"
        }
    ]
} 
export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}