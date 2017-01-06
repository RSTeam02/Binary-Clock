class BinaryTable {

    dec2Bin(dec) {
        let str = "";
        let binArr = [];
        //unicode for exponents 0...6        
        let utfExp = ["\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074", "\u2075", "\u2076"];
        
        //dec to bin conversions
        for (let i = 0; i < dec.length; i++) {
            binArr[i] = ("000000" + parseInt(dec[i]).toString(2)).slice(-7);
        }
        //first row for powers of 2
        str += "<tr>";
        for (let i = binArr.length + 1; i >= 0; i--) {
            (i === binArr.length + 1)
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