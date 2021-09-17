const toggle = document.querySelector("#checked");
const sound = new Audio('audio/ca-va-peter.mp3');
const audio = document.querySelector("#audio")

toggle.addEventListener("change", function(event) {
    if (toggle.checked) {
        audio.currentTime = 0;
        audio.play();
    } else if (!toggle.checked) {
        audio.pause();
    }

});
