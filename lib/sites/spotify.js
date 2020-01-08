function GetSpotify() {
    var play = document.getElementsByClassName('now-playing');
    if (play.length == 0) {
        document.getElementById("lyrics_open").style.display = "none";
        return -1;
    }
    var info = {};
    var title = play[0].getElementsByClassName('track-info')[0].getElementsByClassName('track-info__name')[0].innerText
    var artist = play[0].getElementsByClassName('track-info')[0].getElementsByClassName('track-info__artists')[0].getElementsByTagName('a')[0].innerText;
    info.title = CleanupNames(title);
    info.artist = CleanupNames(artist);
    return info;
}
