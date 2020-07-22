var mainMenuHeaderText = ["Welcome To bla bla Site", "Fill Your Life With Adventures,", "Create Your Story"];
var counter = 0;
var delay = setInterval(change, 10000);

function change() {
    document.getElementById("changeHeader").innerHTML = mainMenuHeaderText[counter];
    counter++;
    if (counter >= mainMenuHeaderText.length) {
        counter = 0;
    }
}