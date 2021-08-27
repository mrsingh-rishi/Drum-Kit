var numOfDrum = document.querySelectorAll(".drum").length;
for(var i =0;i<numOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonPress=this.innerHTML;
        makeSound(buttonPress);
        btnAnimation(buttonPress);
    })
    
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnimation(event.key);
})





function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
    }
}



function btnAnimation(currkey){
    var activatebtn = document.querySelector("." + currkey);

    activatebtn.classList.add("pressed");

    setTimeout(function(){
        activatebtn.classList.remove("pressed");
    }, 100)
}