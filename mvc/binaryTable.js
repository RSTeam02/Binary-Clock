class BinaryTable {

    dec2Bin(dec) {
        let str = "";
        let binArr = [];
        let utfExp = ["\u2070", "\u00B9", "\u00B2", "\u00B3", "\u2074", "\u2075", "\u2076", "\u2077", "\u2078"];

        for (let i = 0; i < dec.length; i++) {
            binArr[i] = ("000000" + parseInt(dec[i]).toString(2)).slice(-7);
        }
        str += "<tr>";
        for (let i = binArr.length + 1; i >= 0; i--) {
            (i === binArr.length + 1)
                ? str += `<th id="btmRight"></th>`
                : str += `<th id="bottom">2${utfExp[i]}</th>`;
        }
        str += "</tr>";
        for (let i = 0; i < binArr.length; i++) {
            str += "<tr>";
            for (let j = 0; j <= binArr[i].length; j++) {
                (j === 0)
                    ? str += `<th class="dec">${dec[i]}</th>`
                    : str += `<td class="bin">${binArr[i][j - 1]}</td>`;
            }
            str += "</tr>";
        }

        return str;
    }
}