const generateButton = document.getElementById("pin-generate-button");
function pinGenerator(){
    const randomNumber = ""+Math.round(Math.random()*10000);
    if (randomNumber.length==4) {
        document.getElementById("pin-display").value = randomNumber;
        console.log(randomNumber); 
    }
    else{
        pinGenerator();
    }
}
generateButton.addEventListener("click", function(){
    pinGenerator();
})

const buttons = document.getElementById("button-body");
buttons.addEventListener("click", function(event){
    const newNumber = event.target.innerText;
    const numberDisplay = document.getElementById("number-display").value;
    const stringNumber = parseInt(newNumber);
    if(newNumber == "C"){
        document.getElementById("number-display").value ="";
    }
    else if(!isNaN(stringNumber)){
        document.getElementById("number-display").value = numberDisplay + newNumber;
    }
});
document.getElementById("submit-button").addEventListener("click", function(){
    const matchNotify = document.getElementById("no-match");
    const numberDisplay = document.getElementById("number-display").value;
    const pinDisplay = document.getElementById("pin-display").value;
    if(pinDisplay ==numberDisplay){
        document.getElementById("match").style.display = "block";
        document.getElementById("no-match").style.display = "none";
    }
    else{
        document.getElementById("match").style.display = "none";
        document.getElementById("no-match").style.display = "block";
    }
})