class Clock {
    //switch AM/PM or 24h mode
    timeDate(h24) {

        //every unit with 2 digits
        var optionsDate = {
            year: "2-digit", month: "2-digit", day: "2-digit"
        };
        var timeDateStr;
        var timePart, datePart, apm;
        var date = new Date();

        if (h24) {
            document.getElementById("ampm").innerHTML = "AM/PM";
            timePart = date.toLocaleTimeString('en-GB').split(':');
            datePart = date.toLocaleDateString('en-GB', optionsDate).split('/');
        } else {
            apm = date.toLocaleTimeString('en-US').slice(8, 11);
            document.getElementById("ampm").innerHTML = apm;
            timePart = date.toLocaleTimeString('en-US').slice(0, -3).split(':');
            timePart = [("0" + timePart[0]).slice(-2), timePart[1], timePart[2]];
            datePart = date.toLocaleDateString('en-US', optionsDate).split('/');
        }
        //join 2 arrays into 1
        timePart.push.apply(timePart, datePart);

        return timePart;
    }

}