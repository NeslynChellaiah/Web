
for (var i = 0; i < document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click',function (){
        music(this.innerHTML);
    });
}

document.addEventListener('keydown', function(event){
    music(event.key);

});

function music(value) {
    switch (value) {
        case '7':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case '8':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case '9':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case '4':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case '5':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case '6':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case '2':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        default:
            break;
    }
}

