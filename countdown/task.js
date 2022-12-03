
const lessTimer = function(){
    const timer = document.getElementById("timer")
    if (timer.textContent == 0 ){
        window.alert("Вы победили в конкурсе!")
        return clearInterval(intervalId);
    }
    timer.textContent--;
}

const intervalId = setInterval(lessTimer, 200);