document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playlist = document.getElementById("playlist");
    const toggleButton = document.getElementById("toggleButton");
    let isPlaying = false;

    playlist.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const songSrc = event.target.getAttribute("data-src");
            audioPlayer.src = songSrc;
            audioPlayer.play();
            isPlaying = true;
            updateToggleButton();
        }
    });

    function togglePlayer() {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        updateToggleButton();
    }

    function updateToggleButton() {
        if (isPlaying) {
            toggleButton.innerHTML = "Wyłącz";
            toggleButton.style.backgroundImage = "url('img/off.png')";
        } else {
            toggleButton.innerHTML = "Włącz";
            toggleButton.style.backgroundImage = "url('img/on.png')";
        }
    }
});
