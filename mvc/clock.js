export class Clock {
    //switch AM/PM or 24h mode
    timeDate(h24) {
        
        var date = new Date();

        var timeDatePart = {          
            hour: ("0" + date.getHours()).slice(-2),
            min: ("0" + date.getMinutes()).slice(-2),
            sec: ("0" + date.getSeconds()).slice(-2),
            day: ("0"+ date.getDate()).slice(-2),
            month:("0"+ (date.getMonth() + 1)).slice(-2),
            year: ("" + date.getFullYear()).slice(-2),
            apm: ""
        };       

        if (!h24) {
            timeDatePart.apm = (date.getHours() > 11 && date.getHours() <= 23) ? "PM" : "AM";    
            timeDatePart.hour = (date.getHours() % 12 !== 0) ? ("0" + date.getHours() % 12).slice(-2) : "12";
        }else{
            timeDatePart.apm = "AM/PM";
        }

        return timeDatePart;
    }

}