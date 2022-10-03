function copyGmail() {
    var copyText = document.getElementById("Gmail");
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);

}

function copyDiscord() {
    var copyText = document.getElementById("Discord");
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);

}