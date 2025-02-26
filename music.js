document.addEventListener('DOMContentLoaded', () => {
     const AudioPlayer = document.getElementById('music-player');
     const Volume = 0.25;
     const tracks = ['track.mp3', 'track1.mp3']; // Array of track
options

     if (AudioPlayer) {
         AudioPlayer.volume = Volume;
         // Choose a random track from the array
         const randomTrack = tracks[Math.floor(Math.random() *
tracks.length)];
         AudioPlayer.src = randomTrack;
     }

     // Entry overlay function
     window.enterSite = function() {
         const overlay = document.getElementById('enter-overlay');
         if (overlay) {
             overlay.style.display = 'none';
             if (AudioPlayer) {
                 AudioPlayer.play()
                     .then(() => console.log('Playing track:',
AudioPlayer.src))
                     .catch(err => {
                         console.warn('Audio playback issue:', err);
                     });
             }
         }
     };

     // Title Animation
     const titles = ['#', '#d', '#de', '#dea', '#dead', '#deads',
'#deadsh', '#deadsho', '#deadshot', '#deadshot', '#deadsho', '#deadsh',
'#deads', '#dead', '#dea', '#de', '#d', '#'];
     let index = 0;

     function changeTitle() {
         document.title = titles[index];
         index = (index + 1) % titles.length;
         setTimeout(changeTitle, 200);
     }
     changeTitle();

     // NextParticle Initialization
     const nextParticle = new NextParticle({
         image: document.getElementById("logo"),
         width: window.innerWidth,
         height: window.innerHeight * 0.8,
         maxWidth: Math.min(window.innerWidth * 0.8, 400),
         particleGap: 4,
         velocity: 0.5,
         proximity: 100,
         mouseForce: 300,
         color: "#c0c0c0",
     }); 

     function resizeParticle() {
         nextParticle.width = window.innerWidth;
         nextParticle.height = window.innerHeight * 0.8;
         nextParticle.maxWidth = Math.min(window.innerWidth * 0.8, 400);
         nextParticle.start();
     }

     window.onresize = resizeParticle;
     resizeParticle();
});
