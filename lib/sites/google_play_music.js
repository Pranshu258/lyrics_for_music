function GetGooglePlayMusic() {
    try {
        var title = document.getElementById('currently-playing-title').title;
        var artist = document.getElementById('player-artist').innerText;
        var info = {};
        info['title'] = CleanupNames(title);
        info['artist'] = CleanupNames(artist);
        return info;
    } catch {
        return -1;
    }
}
