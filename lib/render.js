function AppendLyricsDiv() {
    var lyrics_div = document.createElement("div");
    lyrics_div.id = "lyrics_div";
    lyrics_div.innerHTML =
        '<div id="lyrics_open" class="lyrics lyrics_open">' +
        '<p id="close_lyrics">Hide Lyrics - </p>' +
        '<br>' +
        '<h2 id="lyrics_ext_title" style="text-transform: capitalize;"></h2>' +
        '<h3 id="lyrics_ext_artist" style="text-transform: capitalize;"></h3><br>' +
        '<div id="lyrics_ext_lyrics"></div>' +
        '<br>' +
        '<p id="lyricswikia"></p><br>' +
        '</div>' +
        '<div id="lyrics_closed" class="lyrics lyrics_closed">' +
        '<p id="show_lyrics">Show Lyrics +</p>' +
        '</div>';
    document.body.appendChild(lyrics_div);
}

function HideLyricsBlock() {
    document.getElementById("lyrics_open").style.display = "none";
    document.getElementById("lyrics_closed").style.display = "none";
}

function SetLyricsBlock(song, lyrics) {
    document.getElementById("lyrics_ext_lyrics").innerHTML = lyrics;
    document.getElementById("lyrics_ext_title").innerText = song.title;
    document.getElementById("lyrics_ext_artist").innerText = song.artist;
    document.getElementById("lyrics_open").style.display = "block";
    document.getElementById("lyrics_closed").style.display = "none";
}

function SetEventListeners() {
    document.getElementById("close_lyrics").addEventListener("click", function () {
        document.getElementById('lyrics_open').style.display = 'none';
        document.getElementById('lyrics_closed').style.display = 'block';
    });

    document.getElementById("show_lyrics").addEventListener("click", function () {
        document.getElementById('lyrics_open').style.display = 'block';
        document.getElementById('lyrics_closed').style.display = 'none';
    });
}