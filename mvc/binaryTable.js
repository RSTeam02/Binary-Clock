class BinaryTable {

    dec2Bin(dec) {

        let binArr = [];
        let year64 = 0;

        //dec to bin conversions
        for (let i = 0; i < dec.length; i++) {
            //if year >=64 append 1 additional col
            if (parseInt(dec[dec.length - 1]) >= 64) {
                binArr[i] = ("000000" + parseInt(dec[i]).toString(2)).slice(-7);
                year64 = 1;
            } else {
                binArr[i] = ("00000" + parseInt(dec[i]).toString(2)).slice(-6);
                year64 = 0;
            }
        }
        return this.htmlTable(binArr, dec, year64);
    }


    htmlTable(binArr, dec, year64) {
        //unicode for exponents 0...6       
        let utfExp = ["\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074", "\u2075", "\u2076"];
        let str = "";

        //first row for powers of 2
        str += "<tr>";
        for (let i = binArr.length + year64; i >= 0; i--) {
            (i === binArr.length + year64)
                ? str += `<th id="btmRight"></th>`
                : str += `<th id="bottom">2${utfExp[i]}</th>`;
        }
        str += "</tr>";
        //rows for binary numbers of each time unit
        for (let i = 0; i < binArr.length; i++) {
            str += "<tr>";
            for (let j = 0; j <= binArr[i].length; j++) {
                //first column (j = 0) contains time units in dec, else binary numbers
                (j === 0)
                    ? str += `<th class="dec">${dec[i]}</th>`
                    : str += `<td class="bin">${binArr[i][j - 1]}</td>`;
            }
            str += "</tr>";
        }
        return str;
    }
}