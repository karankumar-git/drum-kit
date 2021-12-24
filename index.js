var drumlist = {
    w: "tom-1",
    a: "tom-2",
    s: "tom-3",
    d: "tom-4",
    j: "snare",
    k: "crash",
    l: "kick-bass"
};

let buttonList = document.querySelectorAll(".drum");
function playaudio(drumname) {
    var dir = "./sounds/" + drumlist[drumname] + ".mp3";
    console.log(dir);
    var audio = new Audio(dir);
    audio.play();    
}

for (var i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", function () {
        playaudio(this.innerHTML);
        console.log(this.innerHTML);
    });
};

document.addEventListener("keypress", function (event) {
    playaudio(event.key);
})
