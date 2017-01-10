class Controller {

    constructor() {
        this.id = ["hl", "01", "dec", "24h", "apm"];
        this.view = new View();
        this.saveSettings();
        this.loadSettings();
        //recall every 1000ms
        setInterval(() => {
            this.updateDisplay();
        }, 1000)
        
    }
    
    //save settings when clicked one of buttons
    saveSettings() {

        for (let i = 0; i < this.id.length; i++) {
            document.getElementById(this.id[i]).addEventListener("click", () => {
                (document.getElementById(this.id[i]).checked)
                    ? localStorage.setItem(`setting${i + 1}`, true)
                    : localStorage.setItem(`setting${i + 1}`, false);
            });
        }
    }

    //visual settings (in)vis dec, bin, color highlight
    settings() {
        if (document.getElementById("hl").checked) {
            this.view.highlight();
        }

        if (!document.getElementById("01").checked) {
            this.view.invisBin();
        }

        if (!document.getElementById("dec").checked) {
            this.view.invisDec();
        }
    }

    updateDisplay() {
        let h24 = document.getElementById("24h").checked;
        let bt = new BinaryTable();
        this.view.domView(bt.dec2Bin(new Clock().timeDate(h24)));
        this.settings();
    }

    loadSettings() {
        for (let i = 0; i < this.id.length; i++) {
            (localStorage.getItem(`setting${i + 1}`) !== null)
                ? document.getElementById(this.id[i]).checked = JSON.parse(localStorage.getItem(`setting${i + 1}`))
                : document.getElementById(this.id[i]).checked = true;
        }
    }

}