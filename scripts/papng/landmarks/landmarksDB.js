const database = {

    landmarks : [
           
        {
            landmarkName: "Port Moresby Nature Park",
            landmarkInfo: "Spread over 30 acres and located next to the University of Papua New Guinea, the park is home to over 550 native animals and hundreds of plant species, many of which are rarely seen outside of PNG.",
            landmarkImage: "https://bucketpng.s3.amazonaws.com/files/s3fs-public/2018-11/portmoresbynaturepark_1.png"
        },
        {
            landmarkName: "Minyé Sinkhole and Cave",
            landmarkInfo: "One of the largest and most impressive giant sinkholes in the world, located in an exotic jungle and crossed by a powerful underground river. Contains one of the largest cave rooms in the world",            
            landmarkImage: "https://www.wondermondo.com/wp-content/uploads/2017/10/Manjanggul.jpg"
        },
        {
            landmarkName: "Mageni Cave and Waterfall",
            landmarkInfo: "An enormous cave opening in the gorge with an 80 m tall waterfall falling into it. The beautiful cave has been mapped in a 7.2 km length.",           
            landmarkImage: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/51-iconic-waterfall-mageni-cave-new-britain-island-papua-new-guinea.webp?w=1190&h=794"
        },
    ]
}
export const getLandmarks = () => {
    return database.landmarks.map(copyOfSingleLandmarkObject => ({...copyOfSingleLandmarkObject}))
}