function convert_views(views){
    if(views>=1000000){
        return (views/1000000) + "M";
    }
    else if(views>=1000){
        return (views/1000) + "K";
    }
    else{
        return views;
    }
}


function createCard(title, cName, views, monthsOld, duration, thumbnail){

    document.querySelector(".title").innerHTML = title;
    document.querySelector(".length").innerHTML = duration;
    let convertedViews = convert_views(views);
    document.querySelector(".stats").innerHTML = `${cName} • ${convertedViews} views • ${monthsOld} months ago`;
    document.querySelector("img").src = thumbnail;

}

createCard("The Demon Slayer Season 2 (Entertainment District Arc)", "Demon Slayer","5000000","7", "8:34", "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1613993182428-R5SIXOIEUZ5FP6XTU9XE/Cover.png")