function GetYoutube() {
    document.getElementsByClassName('more-button style-scope ytd-video-secondary-info-renderer')[0].click();

    function checkCategory() {
        const el = document.getElementById('collapsible').children[0];
        console.log(el)
        if (el.children[0].innerText === "Category" && el.children[1].innerText == "Music") {
            return true;
        }
        return false;
    }

    if (!checkCategory()) {
        document.getElementById("lyrics_open").style.display = "none";
        return -1;
    }

    const els = document.getElementById('collapsible').children;
    const info = {};
    for (var i = 0; i < els.length; i++) {
        if (els[i].children[0].innerText === "Song") {
            info['title'] = CleanupNames(els[i].children[1].innerText);
        }
        if (els[i].children[0].innerText === "Artist") {
            info['artist'] = CleanupNames(els[i].children[1].innerText);
        }
    }

    if (!info['artist'] || !info['title']) {
        document.getElementById("lyrics_open").style.display = "none";
        return -1;
    }

    return info;
}