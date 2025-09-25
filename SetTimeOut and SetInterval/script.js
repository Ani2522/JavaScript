function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// setInterval(()=>{
//     document.querySelector(".childContainer").style.backgroundColor = getRandomColor()
// }, 1000); 

//set Interval repeats the code, if you want to repeate the code againg and again



setTimeout(()=>{
    document.querySelector(".childContainer").style.backgroundColor = getRandomColor()
}, 1000); 

//set timeout just do it once after what the interval is set