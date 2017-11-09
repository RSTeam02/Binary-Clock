export class BinaryTable {

    dec2Bin(dec) {

        let binArr = [];
        let year64 = 0;
        let prop = Object.keys(dec);

        for (let i = 0; i < prop.length - 1; i++) {
            let key = prop[i];
            //if year >=64 append 1 additional col   
            year64 = (parseInt(dec.year) >= 64) ? 1 : 0;         
            binArr[i] = ("000000" + parseInt(dec[key]).toString(2)).slice(-6 - year64);
        }
        //unicode for exponents 0...6       
        let utfExp = ["\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074", "\u2075", "\u2076"];
        let str = "";

        //first row for powers of 2
        str += "<tr>";
        for (let i = binArr.length + year64; i >= 0; i--) {
            str += (i === binArr.length + year64) ? `<th id="btmRight"></th>` : `<th id="bottom">2${utfExp[i]}</th>`;
        }
        str += "</tr>";
        //rows for binary numbers of each time unit
        for (let i = 0; i < binArr.length; i++) {
            str += "<tr>";
            for (let j = 0; j <= binArr[i].length; j++) {
                //first column (j = 0) contains time units in dec, else binary numbers
                let key = prop[i];
                str += (j === 0) ? `<th class="dec">${dec[key]}</th>` : `<td class="bin">${binArr[i][j - 1]}</td>`;
            }
            str += "</tr>";
        }
        return str;
    }
}