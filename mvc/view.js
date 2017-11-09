import { BinaryTable } from "./binaryTable.js";

export class View extends BinaryTable{

    domView(text) {        
        document.getElementById("binTable").innerHTML = super.dec2Bin(text);
        document.getElementById("ampm").innerHTML = text.apm;
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
            colID[i].style.backgroundColor = (colID[i].innerHTML !== "0")
                ? 'lightgreen'
                : 'transparent';
        }
    }

}