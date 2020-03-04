function Run() {
    try {
        const song = GetSong();
        if (song == -1) {
            return;
        }
        const CURR_SONG = song.title + song.artist;
        if (CURR_SONG === FOUND) {
            return;
        }
        if (_RETRY_COUNT > MAX_RETRY || _IS_WAITING_ON_RESPONSE) {
            if (LAST_SONG === CURR_SONG) {
                return;
            } else {
                _RETRY_COUNT = 0;
                FOUND = '';
            }
        }
        LAST_SONG = song.title + song.artist;
        FindAndSetLyrics(song);
        _RETRY_COUNT++;
        _IS_WAITING_ON_RESPONSE = true;
    } catch (e) {
        console.log(e);
    }
}

function FindAndSetLyrics(song) {
    const song_search_url = GetMusixMatchSearchLink(song);
    const cors_api_host = 'cors-anywhere.herokuapp.com';
    const cors_api_url = 'https://' + cors_api_host + '/';
    const headers = new Headers();
    headers.append('x-requested-with', window.origin);
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: headers
    };
    const request = new Request(cors_api_url + song_search_url, options);
    fetch(request)
        .then((response) => response.text())
        .then(function(response) {
            const lyrics_url = GetMusixMatchLyricsLink(response);
            FindLyricsFromMusixMatch(song, lyrics_url);
        })
        .catch(function(err) {
            HideLyricsBlock();
            FOUND = '';
            _IS_WAITING_ON_RESPONSE = false;
        });
}

function FindLyricsFromMusixMatch(song, lyrics_url) {
    const cors_api_host = 'cors-anywhere.herokuapp.com';
    const cors_api_url = 'https://' + cors_api_host + '/';
    const headers = new Headers();
    headers.append('x-requested-with', window.origin);
    const options = {
        mode: 'cors',
        method: 'GET',
        headers: headers
    };
    const request = new Request(cors_api_url + lyrics_url, options);
    fetch(request)
        .then((response) => response.text())
        .then(function(response) {
            const lyrics = ParseMusixMatch(response);
            if (lyrics === '') {
                HideLyricsBlock();
                FOUND = '';
                _IS_WAITING_ON_RESPONSE = false;
            } else {
                SetLyricsBlock(song, lyrics);
                FOUND = song.title + song.artist;
                _RETRY_COUNT = 0;
                _IS_WAITING_ON_RESPONSE = false;
            }
        })
        .catch(function(err) {
            HideLyricsBlock();
            FOUND = '';

            _IS_WAITING_ON_RESPONSE = false;
        });
    return -1;
}
