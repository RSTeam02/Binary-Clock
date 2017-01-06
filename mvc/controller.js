class Controller {

    constructor() {
        this.view = new View();
        //recall every 1000ms
        setInterval(() => {
            this.updateDisplay(new Clock().timeDate());
        }, 1000)

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

    
    updateDisplay(value) {
        let bt = new BinaryTable();
        this.view.domView(bt.dec2Bin(value));
        this.settings();
    }

}