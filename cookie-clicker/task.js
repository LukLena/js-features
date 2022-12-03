
const newClicker = document.getElementById("clicker__counter")
const image = document.getElementById("cookie")
const checkClicker = function(){
    newClicker.textContent++;
        if (newClicker.textContent % 2)  {
          image.width = 300
        }
        else {
          image.width = 200
        }
}
image.onclick = checkClicker;