let currentTrack = null;
let audioPlayer = document.getElementById('audioPlayer');
let audioSource = document.getElementById('audioSource');
let playPauseButton = document.querySelector('.play-pause');

// Function to handle track selection
function playTrack(track) {
    if (currentTrack !== track) {
        currentTrack = track;
        audioSource.src = track;
        audioPlayer.load();  // Reload audio player with the new track
    }

    // Automatically play the track
    audioPlayer.play();
    playPauseButton.innerText = 'Pause';
}

// Function to toggle play/pause button
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerText = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.innerText = 'Play';
    }
}

// Optional: Handle track progression (next/prev) functionality
document.querySelector('.next').addEventListener('click', () => {
    // Logic to play next track
});
document.querySelector('.prev').addEventListener('click', () => {
    // Logic to play previous track
});
