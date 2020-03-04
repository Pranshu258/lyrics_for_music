function GetSong() {
    var site = window.location.hostname;
    if (site === 'music.youtube.com') {
        return GetYoutubeMusic();
    } else if (site === 'open.spotify.com') {
        return GetSpotify();
    } else if (site == 'play.google.com') {
        return GetGooglePlayMusic();
    } else if (site === 'www.youtube.com') {
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
        return '';
    }
}

function ParseMusixMatch(lyrichtml) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(lyrichtml, 'text/html');
    try {
        var lyrics = '';
        var docs = htmlDoc.getElementsByClassName('mxm-lyrics__content');
        for (var i = 0; i < docs.length; i++) {
            lyrics += docs[i].innerText;
        }
        return lyrics;
    } catch {
        return '';
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
    var baseurl = 'https://lyrics.fandom.com/wiki/';
    var lyrics_fandom_url =
        baseurl +
        LyricsFandomURLify(song.artist) +
        '/' +
        LyricsFandomURLify(song.title);
    return lyrics_fandom_url;
}

function GetMusixMatchSearchLink(song) {
    var baseurl = 'https://www.musixmatch.com/search/';
    var url = baseurl + encodeURI(song.artist) + '%20' + encodeURI(song.title);
    return url;
}

function GetMusixMatchLyricsLink(searchResultsHtml) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(searchResultsHtml, 'text/html');
    var boxes = htmlDoc.getElementsByClassName('box box-style-plain');
    var best_result = boxes[0];
    var song_links = best_result.getElementsByTagName('a');
    var song_link = song_links[0].pathname;
    const lyrics_url = 'https://www.musixmatch.com' + song_link;
    return lyrics_url;
}

function CleanupNames(s) {
    s = s.replace(/remastered/gi, '');
    s = s.replace(/remaster/gi, '');
    s = s.replace(/-/gi, '');
    s = s.trim();
    return s;
}
