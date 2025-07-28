let minute = 0; 
let second = 0; 
  
function startBtn() { 
    timer = true; 
    stopWatch(); 
}
  
function stopBtn() { 
    timer = false; 
}
  
function resetBtn() { 
    timer = false; 
    minute = 0; 
    second = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
}
function forwardTimeBy3Minutes() {
    minute += 3;

    if (minute >= 60) {
        minute = minute % 60;
    }

    // Update display
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;

    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;

    // ✅ STOP if we reached or exceeded 30 minutes
    if ((minute * 60 + second) >= 1800) {
        stopBtn();

        if (typeof heaterdone !== 'undefined') {
            heaterdone.style.opacity = "100%";
        }
        f = 25;
        messcounter = 12;
        if (typeof update === 'function') {
            update();
        }
    }
}


  
function stopWatch() { 
    if (timer) { 
        second++; 
  
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            minute = 0; 
            second = 0; 
        } 
  
        let minString = minute; 
        let secString = second; 
  
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
  
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
       setTimeout(stopWatch, 1000);

    } 
}