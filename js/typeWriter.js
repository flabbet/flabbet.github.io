let i = 0;
let element;
let text;
let speed;


document.addEventListener('DOMContentLoaded', function() {
initializeTypeWriter(document.querySelector("#typeWriteHeader"));
}, false);

function initializeTypeWriter(elementWithText, timeDelay = 75){
    element = elementWithText;
    text = elementWithText.innerHTML;
    elementWithText.innerHTML = "";
    speed = timeDelay;
    typeWrite();
}
function typeWrite(){
    if(i < text.length){
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}