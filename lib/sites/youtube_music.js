function GetYoutubeMusic() {
    var bar = document.getElementsByClassName('title style-scope ytmusic-player-bar')
    if (bar.length < 1) {
        return -1;
    }
    var title = bar[0].title
    if (title.trim() === "") {
        document.getElementById("lyrics_open").style.display = "none";
        return -1;
    }
    var artist = document.getElementsByClassName("subtitle style-scope ytmusic-player-bar")[0].getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string')[0].text;
    var info = {};
    info['title'] = CleanupNames(title);
    info['artist'] = CleanupNames(artist);
    return info;
}
