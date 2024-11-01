var n=document.querySelectorAll(".drum").length;
var audio=new Audio('./sounds/tom-1.mp3');
for(let i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        music(this.innerHTML);
        anime(this.innerHTML);
    })
}
document.addEventListener('keydown',function(event){
    music(event.key);
    anime(event.key);
});

function music(key){
    switch(key){
        case 'w':
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'd':
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'j':
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
}
}

function anime(currentKey){
    //alert(currentKey);
    var animKey=document.querySelector("."+currentKey);
    animKey.classList.add("pressed");
    setTimeout(()=>animKey.classList.remove("pressed"),100);
}