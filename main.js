AppendLyricsDiv();

_RETRY_COUNT = 0;
_IS_WAITING_ON_RESPONSE = false;
MAX_RETRY = 3;
FOUND = "";
LAST_SONG = "";

Run()

SetEventListeners()

setInterval(Run, 1000);
