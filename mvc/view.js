
class View {

    domView(text) {
        document.getElementById("binTable").innerHTML = text;
    }

    invisBin() {
        let colID = document.getElementsByClassName("bin");
        for (let i = 0; i < colID.length; i++) {
            colID[i].style.color = 'transparent';
        }
    }

    invisDec() {
        let colID = document.getElementsByClassName("dec");
        for (let i = 0; i < colID.length; i++) {
            colID[i].style.color = 'transparent';
        }
    }

    highlight() {
        let colID = document.getElementsByClassName("bin");
        for (let i = 0; i < colID.length; i++) {
            (colID[i].innerHTML !== "0")
                ? colID[i].style.backgroundColor = 'lightgreen'
                : colID[i].style.backgroundColor = 'transparent';
        }
    }

}