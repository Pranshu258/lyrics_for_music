function GetSpotify() {
    var play = document.getElementsByClassName('now-playing');
    if (play.length == 0) {
        document.getElementById('lyrics_open').style.display = 'none';
        return -1;
    }
    var info = {};
    var song = play[0]
        .getElementsByClassName('ellipsis-one-line')[0]
        .getElementsByTagName('a');
    var title = song[0].innerText;
    var artist = song[1].innerText;
    info.title = CleanupNames(title);
    info.artist = CleanupNames(artist);
    return info;
}
