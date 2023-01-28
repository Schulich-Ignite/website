// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
    let videoURLDiv = document.getElementById('videoLink');
    if (videoURLDiv){
    let videuURL = videoURLDiv.innerHTML;
    let videoID = videuURL.split('/')[3];
    player = new YT.Player('infoVideoPlayer', {
        height: '390',
        width: '640',
        videoId: videoID,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });}
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}


document.addEventListener("DOMContentLoaded", function (){
    if (window.location.hash == "#play-blog-video"){
        document.getElementById("play-blog-video").classList.add("show")
    }
});