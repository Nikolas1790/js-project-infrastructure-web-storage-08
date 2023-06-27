import Player from '@vimeo/player';
// console.log(Player);


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(player);


const onPlay = function (data) {
    // event.preventDefault()
    // data is an object containing properties specific to that event
    //  const currentSec = data.currentTime;
   
    localStorage.setItem("videoplayer-current-time", currentTime);
    console.log(localStorage.getItem("videoplayer-current-time"))
};

player.on("timeupdate", onPlay);

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    })


// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });






