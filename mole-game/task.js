hole = document.getElementsByClassName('hole')
dead = document.getElementById('dead')
lost = document.getElementById('lost')
for(let i=0; i < hole.length; i++){
    hole[i].onclick = foundHole;
    function foundHole(){        
        if (hole[i].className.includes('hole_has-mole')){
            dead.textContent++; 
        }
        else { 
            lost.textContent++;
        }
        if (lost.textContent == 5){
            setTimeout(() => {
               alert("игра окончена. Вы проиграли!")
               lost.textContent = 0;
               dead.textContent = 0;
            } )
        }
        
        else if (dead.textContent == 10){
            setTimeout(() => {
                alert("игра окончена. Вы выиграли!");
                dead.textContent = 0;
                lost.textContent = 0;
            })
        }
    }
}




