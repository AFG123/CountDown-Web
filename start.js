var start = document.getElementById('start');
var reset = document.getElementById('reset');

var d = document.getElementById('Days');
var h = document.getElementById('Hours');
var m = document.getElementById('Minutes');
var s = document.getElementById('Seconds');

//store a reference to the variable
var startTime = null;

function timer(){
    if (d.value == 0 && h.value == 0 && m.value == 0 && s.value == 0) {
        d.value = 0;
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;
    } else if (d.value != 0 && h.value == 0) {
        h.value = 24;
        d.value--;
    }
}

function stopTimer(){
    clearInterval(startTimer);
}



start.addEventListener('click', function(){
    // console.log("Hello")
    //initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})


reset.addEventListener('click',function(){
    d.value = 0;
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
})