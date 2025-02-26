document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("your-audio-file.mp3"); // Replace with your MP3 file URL
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const volumeSlider = document.getElementById("volumeSlider");

    // Play audio
    playButton.addEventListener("click", function () {
        audio.play();
    });

    // Pause audio
    pauseButton.addEventListener("click", function () {
        audio.pause();
    });

    // Adjust volume
    volumeSlider.addEventListener("input", function () {
        audio.volume = volumeSlider.value;
    });
});
