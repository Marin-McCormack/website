function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;

    let li = document.createElement("li");
    li.innerHTML = songName;
    let ul = document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
}
