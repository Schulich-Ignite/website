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
    let videuURL = videoURLDiv.innerHTML;
    let videoID = videuURL.split('/')[3];
    player = new YT.Player('infoVideoPlayer', {
        height: '390',
        width: '640',
        videoId: videoID,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
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


$(document).ready(function () {
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#infoVideo").attr('src');
    // var myPlayer = videojs('infoVideo');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function () {
        $('html').removeClass("no-scroll");
        player.pauseVideo();
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function () {
        $('html').addClass("no-scroll");
    });
});