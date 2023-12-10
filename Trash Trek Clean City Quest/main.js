// Image sources
const trashSources = [
    'assets/trash/glass/',
    'assets/trash/metal/',
    'assets/trash/organic/',
    'assets/trash/paper/',
    'assets/trash/plastic/'
];

function preloadImages(srcList) {
    return new Promise((resolve, reject) => {
        const images = [];
        let loadedCount = 0;

        srcList.forEach((src, index) => {
            for (let i = 1; i <= 4; i++) {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === srcList.length * 4) {
                        resolve(images);
                    }
                };
                img.onerror = (err) => reject(err);
                img.src = `${src}${i}.png`;
                images.push(img);
            }
        });
    });
}

// Preload all the images
preloadImages(trashSources)
    .then((images) => {
        // Now that the images are preloaded, assign them to the game elements
        // Replace the following lines with your logic to assign images to elements
        // For example:
        trashDom.src = images[0].src;
        trashDom2.src = images[1].src;
        // ... and so on for other elements
    })
    .catch((error) => {
        console.error('Image preload failed:', error);
    });



let trashDom = document.querySelector(".img1")
let trashDom2 = document.querySelector(".img2")
let trashDom3 = document.querySelector(".img3")
let trashDom4 = document.querySelector(".img4")
let trashDom5 = document.querySelector(".img5")
let trashDom6 = document.querySelector(".img6")
let trashDom7 = document.querySelector(".img7")
let trashDom8 = document.querySelector(".img8")
let trashDom9 = document.querySelector(".img9")
let trashDom10 = document.querySelector(".img10")
let trashDom11 = document.querySelector(".img11")
let trashDom12 = document.querySelector(".img12")
let trashDom13 = document.querySelector(".img13")
let trashDom14 = document.querySelector(".img14")
let trashDom15 = document.querySelector(".img15")

let x1 = document.querySelector(".x1")
let x2 = document.querySelector(".x2")
let x3 = document.querySelector(".x3")

let xcount=0;

let bins = document.querySelector(".trashBins img")

let trashes = loadTrashes()
let trash = getRandomTrash()

let trashes2 = loadTrashes()
let trash2 = getRandomTrash2()

let trashes3 = loadTrashes()
let trash3 = getRandomTrash3()

let trashes4 = loadTrashes()
let trash4 = getRandomTrash4()

let trashes5 = loadTrashes()
let trash5 = getRandomTrash5()

trashDom.src = trash.src
trashDom.name = trash.type

trashDom2.src = trash2.src
trashDom2.name = trash2.type

trashDom3.src = trash3.src
trashDom3.name = trash3.type

trashDom4.src = trash4.src
trashDom4.name = trash4.type

trashDom5.src = trash5.src
trashDom5.name = trash5.type

let trashes6 = loadTrashes()
let trash6 = getRandomTrash6()

let trashes7 = loadTrashes()
let trash7 = getRandomTrash7()

let trashes8 = loadTrashes()
let trash8 = getRandomTrash8()

let trashes9 = loadTrashes()
let trash9 = getRandomTrash9()

let trashes10 = loadTrashes()
let trash10 = getRandomTrash10()

trashDom6.src = trash6.src
trashDom6.name = trash6.type

trashDom7.src = trash7.src
trashDom7.name = trash7.type

trashDom8.src = trash8.src
trashDom8.name = trash8.type

trashDom9.src = trash9.src
trashDom9.name = trash9.type

trashDom10.src = trash10.src
trashDom10.name = trash10.type

let trashes11 = loadTrashes()
let trash11 = getRandomTrash11()

let trashes12 = loadTrashes()
let trash12 = getRandomTrash12()

let trashes13 = loadTrashes()
let trash13 = getRandomTrash13()

let trashes14 = loadTrashes()
let trash14 = getRandomTrash14()

let trashes15 = loadTrashes()
let trash15 = getRandomTrash15()

trashDom11.src = trash11.src
trashDom11.name = trash11.type

trashDom12.src = trash12.src
trashDom12.name = trash12.type

trashDom13.src = trash13.src
trashDom13.name = trash13.type

trashDom14.src = trash14.src
trashDom14.name = trash14.type

trashDom15.src = trash15.src
trashDom15.name = trash15.type


let remainingBiodegradableTrash = countVisibleBiodegradableTrash();
function countVisibleBiodegradableTrash() {
    let displayedBiodegradableTrash=0;
    const trashElements = [
        trashDom, trashDom2, trashDom3, trashDom4, trashDom5,
        trashDom6, trashDom7, trashDom8, trashDom9, trashDom10,
        trashDom11, trashDom12, trashDom13, trashDom14, trashDom15
    ];

    trashElements.forEach((trash) => {
        if (trash.name === "biodegradable" && trash.style.display !== 'none') {
            displayedBiodegradableTrash++;
        }
    });

    return displayedBiodegradableTrash;
}

let score = 0
let scoreText = document.querySelector('h4')
scoreText.innerHTML = "Score: " + score

let timer = 50
let timerText = document.querySelector('h3')
timerText.innerHTML = timer

let gameOver = false
let gameOverBox = document.querySelector(".gameOver")
gameOverBox.style.display = 'none'

let congrats = document.querySelector(".congrats")
congrats.style.display = 'none'

let replayBtn = document.getElementById('replayBtn')

replayBtn.onclick = function(){
    timer = 50
    gameOverBox.style.display = 'none'
    score = 0;
    scoreText.innerHTML = "Score: " + score
    gameOver = false
    xcount=0

    x1.style.webkitTextFillColor = 'transparent';
    x2.style.webkitTextFillColor = 'transparent';
    x3.style.webkitTextFillColor = 'transparent';

    trashDom.style.display = 'block';
    trashDom2.style.display = 'block';
    trashDom3.style.display = 'block';
    trashDom4.style.display = 'block';
    trashDom5.style.display = 'block';
    trashDom6.style.display = 'block';
    trashDom7.style.display = 'block';
    trashDom8.style.display = 'block';
    trashDom9.style.display = 'block';
    trashDom10.style.display = 'block';
    trashDom11.style.display = 'block';
    trashDom12.style.display = 'block';
    trashDom13.style.display = 'block';
    trashDom14.style.display = 'block';
    trashDom15.style.display = 'block';

    let trash = getRandomTrash()
    let trash2 = getRandomTrash2()
    let trash3 = getRandomTrash3()
    let trash4 = getRandomTrash4()
    let trash5 = getRandomTrash5()
    let trash6 = getRandomTrash6()
    let trash7 = getRandomTrash7()
    let trash8 = getRandomTrash8()
    let trash9 = getRandomTrash9()
    let trash10 = getRandomTrash10()
    let trash11 = getRandomTrash11()
    let trash12 = getRandomTrash12()
    let trash13 = getRandomTrash13()
    let trash14 = getRandomTrash14()
    let trash15 = getRandomTrash15()

    trashDom.src = trash.src
    trashDom.name = trash.type

    trashDom2.src = trash2.src
    trashDom2.name = trash2.type

    trashDom3.src = trash3.src
    trashDom3.name = trash3.type

    trashDom4.src = trash4.src
    trashDom4.name = trash4.type

    trashDom5.src = trash5.src
    trashDom5.name = trash5.type
        
    trashDom6.src = trash6.src
    trashDom6.name = trash6.type
    
    trashDom7.src = trash7.src
    trashDom7.name = trash7.type
    
    trashDom8.src = trash8.src
    trashDom8.name = trash8.type
    
    trashDom9.src = trash9.src
    trashDom9.name = trash9.type
    
    trashDom10.src = trash10.src
    trashDom10.name = trash10.type
   
    trashDom11.src = trash11.src
    trashDom11.name = trash11.type

    trashDom12.src = trash12.src
    trashDom12.name = trash12.type

    trashDom13.src = trash13.src
    trashDom13.name = trash13.type

    trashDom14.src = trash14.src
    trashDom14.name = trash14.type

    trashDom15.src = trash15.src
    trashDom15.name = trash15.type


    remainingBiodegradableTrash = countVisibleBiodegradableTrash();

    }

setInterval(()=>{
    timer -= 1
    if(timer <= 0){
        timer = 0
        gameOverBox.style.display = 'block'
        gameOver = true
    }
    timerText.innerHTML = timer
    
},1000)

trashDom.addEventListener("dragstart", dragStart);
trashDom2.addEventListener("dragstart", dragStart2);
trashDom3.addEventListener("dragstart", dragStart3);
trashDom4.addEventListener("dragstart", dragStart4);
trashDom5.addEventListener("dragstart", dragStart5);
trashDom6.addEventListener("dragstart", dragStart6);
trashDom7.addEventListener("dragstart", dragStart7);
trashDom8.addEventListener("dragstart", dragStart8);
trashDom9.addEventListener("dragstart", dragStart9);
trashDom10.addEventListener("dragstart", dragStart10);
trashDom11.addEventListener("dragstart", dragStart11);
trashDom12.addEventListener("dragstart", dragStart12);
trashDom13.addEventListener("dragstart", dragStart13);
trashDom14.addEventListener("dragstart", dragStart14);
trashDom15.addEventListener("dragstart", dragStart15);

function dragStart(event) {
    let data = ["img1", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart2(event) {
    let data = ["img2", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart3(event) {
    let data = ["img3", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart4(event) {
    let data = ["img4", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart5(event) {
    let data = ["img5", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}   
function dragStart6(event) {
    let data = ["img6", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart7(event) {
    let data = ["img7", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart8(event) {
    let data = ["img8", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart9(event) {
    let data = ["img9", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart10(event) {
    let data = ["img10", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}
function dragStart11(event) {
    let data = ["img11", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart12(event) {
    let data = ["img12", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart13(event) {
    let data = ["img13", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart14(event) {
    let data = ["img14", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}  
function dragStart15(event) {
    let data = ["img15", event.target.name];
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
}


    bins.addEventListener("dragover",dragTrashOverBin)
    bins.addEventListener("drop",dropTrash)



function dragTrashOverBin(event){
    if(gameOver){
        return
    }
    event.preventDefault();
}


function dropTrash(event){

   let data = JSON.parse(event.dataTransfer.getData("text/plain"));
    let itemName = data[0];
    let itemTarget = data[1];
    let trashDomElement = document.querySelector(`.${itemName}`);
    event.preventDefault();
    console.log(trashDomElement);

    if (itemTarget === "biodegradable") {
        trashDomElement.style.display = 'none';
        score += 5;
        scoreText.innerHTML = "Score: " + score;

       
        remainingBiodegradableTrash--
        console.log(remainingBiodegradableTrash)
        if (remainingBiodegradableTrash == 0) {
            timer = 0;
            congrats.style.display = 'block';
        }
    }else{
        trashDomElement.style.display='none'
        timer -=5
        xcount += 1;
        
        if (xcount === 1) {
            x1.style.webkitTextFillColor = '#6c0056';
        } else if (xcount === 2) {
            x2.style.webkitTextFillColor = '#6c0056';
        } else if (xcount === 3) {
            x3.style.webkitTextFillColor = '#6c0056';
            timer = 0
            gameOverBox.style.display = 'block'
            gameOver = true
        }
        
        
    }
}




function getRandomTrash(){
    let randomIndex = Math.floor(Math.random() * trashes.length)
    return trashes[randomIndex]
}
function getRandomTrash2(){
    let randomIndex = Math.floor(Math.random() * trashes2.length)
    return trashes2[randomIndex]
}
function getRandomTrash3(){
    let randomIndex = Math.floor(Math.random() * trashes3.length)
    return trashes3[randomIndex]
}
function getRandomTrash4(){
    let randomIndex = Math.floor(Math.random() * trashes4.length)
    return trashes4[randomIndex]
}
function getRandomTrash5(){
    let randomIndex = Math.floor(Math.random() * trashes5.length)
    return trashes5[randomIndex]
}
function getRandomTrash6(){
    let randomIndex = Math.floor(Math.random() * trashes6.length)
    return trashes6[randomIndex]
}
function getRandomTrash7(){
    let randomIndex = Math.floor(Math.random() * trashes7.length)
    return trashes7[randomIndex]
}
function getRandomTrash8(){
    let randomIndex = Math.floor(Math.random() * trashes8.length)
    return trashes8[randomIndex]
}
function getRandomTrash9(){
    let randomIndex = Math.floor(Math.random() * trashes9.length)
    return trashes9[randomIndex]
}
function getRandomTrash10(){
    let randomIndex = Math.floor(Math.random() * trashes10.length)
    return trashes10[randomIndex]
}
function getRandomTrash11(){
    let randomIndex = Math.floor(Math.random() * trashes11.length)
    return trashes11[randomIndex]
}
function getRandomTrash12(){
    let randomIndex = Math.floor(Math.random() * trashes12.length)
    return trashes12[randomIndex]
}
function getRandomTrash13(){    
    let randomIndex = Math.floor(Math.random() * trashes13.length)
    return trashes13[randomIndex]
}
function getRandomTrash14(){
    let randomIndex = Math.floor(Math.random() * trashes14.length)
    return trashes14[randomIndex]
}
function getRandomTrash15(){
    let randomIndex = Math.floor(Math.random() * trashes15.length)
    return trashes15[randomIndex]
}



function loadTrashes(){
    let trashes = []
    for(let i = 1 ; i <= 4;i++){
        trashes.push({
            type:'glass',
            src: `assets/trash/glass/${i}.png`
        })
        trashes.push({
            type:'metal',
            src: `assets/trash/metal/${i}.png`
        })
        trashes.push({
            type:'biodegradable',
            src: `assets/trash/organic/${i}.png`
        })
        trashes.push({
            type:'biodegradable',
            src: `assets/trash/paper/${i}.png`
        })
        trashes.push({
            type:'plastic',
            src: `assets/trash/plastic/${i}.png`
        })
    }
    return trashes
}