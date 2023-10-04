const tensMap = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
}

const onesMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

const tenOnesMap = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}

function translateTime(time){
    let [ hour, minute ] = time.split(":").map(str => Number(str))
    const ampm = hour < 11 ? 'am' : 'pm'

    let timeString = ""

    
    if((hour === 12 || hour === 0 ) & minute === 0){
       if(ampm == 'am'){
        return 'midnight'
       } else if (ampm == 'pm') {
        return 'noon'
       } 
    } else if(minute === 0){
        return `${getHour(hour)} o'clock ${ampm}`
    } else {
        let timeString = getHour(hour) + getMinute(minute, ampm)
        return timeString
    }
}

function getMinute(minute, ampm){
    let timeString = ""
    if ( minute < 10 ){
        return timeString += ` oh ${onesMap[minute]} ${ampm}`
    } else if ( minute < 20 & minute > 10 ) {
        return timeString += ` ${tenOnesMap[minute]} ${ampm}`
    } else if (minute%10 === 0) {
        return timeString += ` ${tensMap[minute]} ${ampm}`
    } else {
        [tensPlace, onesPlace] = String(minute).split("")
        timeString += ` ${tensMap[`${tensPlace}0`]} ${onesMap[onesPlace]} ${ampm}`
        return timeString
     }
}

 function getHour(hour){
    let timeString = ""
    if (hour > 12) {
        hour -= 12
    }
    if(hour >= 10){
        timeString += tenOnesMap[hour]
    } else if (hour == 0){ 
        timeString +='twelve' 
    } else {
        timeString += onesMap[hour]
    }
    return timeString
 }

  module.exports = translateTime 
// const testMe = `00:00 midnight
// 00:12 twelve twelve am
// 01:00 one o’clock am
// 06:01 six oh one am
// 06:10 six ten am
// 06:18 six eighteen am
// 06:30 six thirty am
// 10:34 ten thirty four am
// 12:00 noon
// 12:09 twelve oh nine pm
// 23:23 eleven twenty three pm`.split('\n').map(e=> [e.slice(0,5), e.slice(6)])

// for(let x of testMe){
//     console.log(translateTime(x[0]))
// }
