const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const fillBar = document.getElementById('fill');
const seekBar = document.getElementById('seek-bar');

playBtn.addEventListener('click', () => {
	audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
	audioPlayer.pause();
});

stopBtn.addEventListener('click', () => {
	audioPlayer.currentTime = 0;
	audioPlayer.pause();
});

audioPlayer.addEventListener('timeupdate', () => {
	const fillWidth = audioPlayer.currentTime / audioPlayer.duration * 100;
	fillBar.style.width = fillWidth + '%';
});

seekBar.addEventListener('click', (event) => {
	const mouseX = event.clientX - seekBar.offsetLeft;
	const newTime = mouseX / seekBar.offsetWidth * audioPlayer.duration;
	audioPlayer.currentTime = newTime;
	fillBar.style.width = mouseX / seekBar.offsetWidth * 100 + '%';
});