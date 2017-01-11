class Controller {

    constructor() {
        this.classCb = document.getElementsByClassName("cb");
        this.classRb = document.getElementsByClassName("rb");
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

        //store checkbox settings
        for (let i = 0; i < this.classCb.length; i++) {
            document.getElementById(this.classCb[i].id).addEventListener("click", () => {
                (document.getElementById(this.classCb[i].id).checked)
                    ? localStorage.setItem(`cbSetting${i}`, true)
                    : localStorage.setItem(`cbSetting${i}`, false);
            });
        }

        //store radiobtn settings
        for (let i = 0; i < this.classRb.length; i++) {
            this.classRb[i].addEventListener("click", () => {
                for (let i = 0; i < this.classRb.length; i++) {
                    (document.getElementById(this.classRb[i].id).checked)
                        ? localStorage.setItem(`rbSetting${i}`, true)
                        : localStorage.setItem(`rbSetting${i}`, false);
                }
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

        for (let i = 0; i < this.classCb.length; i++) {
            (localStorage.getItem(`cbSetting${i}`) !== null)
                ? document.getElementById(this.classCb[i].id).checked = JSON.parse(localStorage.getItem(`cbSetting${i}`))
                : document.getElementById(this.classCb[i].id).checked = true;
        }

        for (let i = 0; i < this.classRb.length; i++) {
            (localStorage.getItem(`rbSetting${i}`) !== null)
                ? document.getElementById(this.classRb[i].id).checked = JSON.parse(localStorage.getItem(`rbSetting${i}`))
                : document.getElementById(this.classRb[i].id).checked = true;
        }

    }

}