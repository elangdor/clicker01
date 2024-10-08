let kilometersRun = 0;


const clickShoes = document.getElementById("runningShoes");


function shoesClicked() {
    kilometersRun++;
    
}


function calcClickAmount() {

}

clickShoes.onclick = shoesClicked;