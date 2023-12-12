       // Get references to the level buttons
       const level1Btn = document.getElementById('level1');
       const level2Btn = document.getElementById('level2');
       const level3Btn = document.getElementById('level3');
       let lock = document.querySelector(".lock")
       let lock2 = document.querySelector(".lock2")
       function game(){
        window.location.assign('game.html');
       }
       function game2(){
        window.location.assign('game2.html');
       }
       function game3(){
        window.location.assign('game3.html');
       }
       let key1 = JSON.parse(localStorage.getItem("key1")) || [];
       let key2 = JSON.parse(localStorage.getItem("key2")) || [];
       if(key1==1){
        lock.style.display = 'none'
       }
       if(key2==1){
        lock2.style.display = 'none'
       }

