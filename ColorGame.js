var initial_val =6;
var colors = generateRandomColors(initial_val);
var NavBar  = document.querySelector(".NavBar");
var squares = document.querySelectorAll(".square");
var NewGame = document.querySelector("#NewGame");
//pick randomColor;
var PickedColor = pickedColorFn();
//Span work
var ColorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
//Buttons 
var easy_btn = document.querySelector("#Easy-btn");
var hard_btn = document.querySelector("#Hard-btn");

//For Theme button
var themeMode = document.getElementById("Mode");
var themeModeText = document.getElementById("modetext");
var themebool = false;
var body = document.querySelector("#body-m");
var plan_bar = document.querySelector("#plan-bar-m");
var icons = document.querySelector("#icons");




ColorDisplay.textContent = PickedColor;
message.textContent = "Welcome";

NewGame.addEventListener("click", function(){
    NewGame.textContent ="New Game"
    colors = generateRandomColors(initial_val);
    PickedColor = pickedColorFn()
    ColorDisplay.textContent = PickedColor;
    for(var i=0;i<squares.length;i++){
        //Add initial color to squares
        squares[i].style.backgroundColor = colors[i]
    }
});


for(var i=0;i<squares.length;i++){
    //Add initial color to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listners to squares
    squares[i].addEventListener("click" ,function(){
        //grab color of clicked sqaure
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === PickedColor){
            message.textContent = "Correct";
            
            changeColors(clickedcolor);
            NavBar.style.backgroundColor = clickedcolor;
            NewGame.textContent ="PlayAgain?"
        }
        else{
            this.style.backgroundColor = "grey";
            message.textContent = "Try Again";
            
            
            
        }
        
        
    });

}

//Button work
easy_btn.addEventListener("click",function(){
    hard_btn.classList.remove("active");
    easy_btn.classList.add("active");
    colors = generateRandomColors(3);
    initial_val = 3;
    PickedColor = pickedColorFn();
    ColorDisplay.textContent = PickedColor;
    for(var i=0; i< squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }

});
hard_btn.addEventListener("click",function(){
    hard_btn.classList.add("active");
    easy_btn.classList.remove("active");
    colors = generateRandomColors(6);
    initial_val = 6;
    PickedColor = pickedColorFn();
    ColorDisplay.textContent = PickedColor;
    for(var i=0; i< squares.length ; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
});
themeMode.addEventListener("click",function(){
    
    if(themebool == false){
        themeModeText.textContent = "Dark Mode";
        themebool = true;
        body.classList.remove("text-bg-dark");
        plan_bar.classList.remove("text-bg-dark");
        easy_btn.classList.remove("btn-outline-light");
        easy_btn.classList.add("btn-outline-secondary");
        hard_btn.classList.remove("btn-outline-light");
        hard_btn.classList.add("btn-outline-secondary");
        NewGame.classList.remove("btn-light");
        NewGame.classList.add("btn-secondary");
        themeMode.classList.remove("btn-light");
        themeMode.classList.add("btn-secondary");
        }
    else{
        themeModeText.textContent = "Light Mode";
        themebool = false;
        body.classList.add("text-bg-dark");
        plan_bar.classList.add("text-bg-dark");
        easy_btn.classList.add("btn-outline-light");
        easy_btn.classList.remove("btn-outline-secondary");
        hard_btn.classList.add("btn-outline-light");
        hard_btn.classList.remove("btn-outline-secondary");
        NewGame.classList.add("btn-light");
        NewGame.classList.remove("btn-secondary");
        themeMode.classList.add("btn-light");
        themeMode.classList.remove("btn-secondary");
    }
});

// 
function changeColors(color){
    //loop throught al squares
    for(var i =0 ; i< squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
    
}

function pickedColorFn(){
    var random = Math.floor(Math.random() * colors.length)
    console.log(random,colors.length);
    return colors[random];
}

function generateRandomColors(nums){
    //we need an array
    var array =[]
    //add num random colors to array;
    for(var i =0;i<nums;i++){
        //get random color
        array.push(RandomColorForGen());
    }
    //return arry
    return array;
}

function RandomColorForGen(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256)
 
    var FinalColor = "rgb(" + r + ", "+ g + ", "+ b + ")";
    return FinalColor;
}