function GetSong() {
    var site = window.location.hostname;
    if (site === "music.youtube.com") {
        return GetYoutubeMusic();
    } else if (site === "open.spotify.com") {
        return GetSpotify();
    } else if (site == "play.google.com") {
        return GetGooglePlayMusic();
    } else if (site === "www.youtube.com") {
        return GetYoutube();
    } else {
        return -1;
    }
}

function ParseLyricsFandom(lyrichtml) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(lyrichtml, 'text/html');
    try {
        lyrics = htmlDoc.getElementsByClassName('lyricbox');
        return lyrics[0].innerHTML;
    } catch {
        return "";
    }
}

function LyricsFandomURLify(s) {
    s = s.split(' ').join('_');
    s = encodeURI(s);
    s = s.replace('?', '%3F');
    s = s.replace('&', '%26');
    return s;
}

function GetLyricsFandomLink(song) {
    var baseurl = "https://lyrics.fandom.com/wiki/";
    var lyrics_fandom_url = baseurl + LyricsFandomURLify(song.artist) + ":" + LyricsFandomURLify(song.title);
    return lyrics_fandom_url;
}

function CleanupNames(s) {
    s = s.replace(/remastered/ig, '');
    s = s.replace(/remaster/ig, '');
    s = s.replace(/-/ig, '');
    s = s.trim();
    return s;
}
