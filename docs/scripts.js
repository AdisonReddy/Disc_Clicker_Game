var Discs = 0;
var AutoCLicker = 0;
var AutoClickerCost = 11;
var DiscMultiplier = 0;
var DiscMuliplyAmount = 0;
var DiscMultiplierCost = 10;

//_______________________________________________________________________Base Clicker Start

function GetDiscCount() {
    document.getElementById("DiscCount").innerHTML = Discs.toFixed(2);
    Unavailible();
    Extras();
}
GetDiscCount();

function DiscsPerSecond() {
    var DiscsAsecond = AutoCLicker + (DiscMuliplyAmount - 1);
    if (0 < AutoCLicker && DiscMultiplier > 0) {
        document.getElementById("DiscsPerSecond").innerHTML = "Discs/Second: " + DiscsAsecond.toFixed(2);
    }
    else if (AutoCLicker > 0) {
        document.getElementById("DiscsPerSecond").innerHTML = "Discs/Second: " + AutoCLicker;
    }
    else if (DiscMultiplier > 0) {
        document.getElementById("DiscsPerSecond").innerHTML = "Discs/Click: " + DiscMuliplyAmount;
    }
}


const AddDiscButton = document.getElementById("GetDiscButton");
const AddDiscImage = document.getElementById("DiscImage");
AddDiscButton.addEventListener('click', AddDisc)
AddDiscImage.addEventListener('click', AddDisc)

function AddDisc() {
    if (DiscMultiplier >= 1) {
        ActivateDiscMultiplier();
    }
    else {
        Discs += 1;
        GetDiscCount();
    }
}
//_______________________________________________________________________Base Clicker End

//______________________________________________________________________Auto CLicker Start

const AutoCLickerButton = document.getElementById('BuyAutoCLicker');
const ClickerCount = document.getElementById("AutoClickerCount");
const ClickerCost = document.getElementById("AutoClickerCost");

function GetAutoClickerCount() {
    ClickerCount.innerHTML = "Sponserships: " + AutoCLicker.toFixed(2);
};
GetAutoClickerCount()

function GetAutoClickerCost() {
    ClickerCost.innerHTML = "Get A Sponser: " + AutoClickerCost.toFixed(2);
};
GetAutoClickerCost()

AutoCLickerButton.onclick = function AddAutoCLicker() {
    if (Discs >= AutoClickerCost) {
        AutoCLicker += 1;
        Discs -= AutoClickerCost;
        AutoClickerCost = AutoClickerCost * 1.10;
        GetDiscCount();
        GetAutoClickerCount();
        GetAutoClickerCost();
        DiscsPerSecond();
    }
    else {
        ClickerCost.innerHTML = "Insufficient Funds";
        ClickerCost.style.color = "red";
    }
};

setInterval(
    function ActivateAutoClicker() {
        if (0 < AutoCLicker && DiscMultiplier > 0) {
            ActivateDiscMultiplier();

        }
        else {
            Discs += AutoCLicker;
            GetDiscCount();

        }
    }
    , 1000);

//______________________________________________________________________Auto CLicker End

//______________________________________________________________________Multiplier Start

const MultiplierButton = document.getElementById('BuyClickMulitplier');
const MulitplierCount = document.getElementById("ClickMuliplierCount");
const MultiplierCost = document.getElementById("ClickMultiplierCost");

function GetDiscMultiplierCount() {
    MulitplierCount.innerHTML = "Tournaments: " + DiscMultiplier.toFixed(2);
};
GetDiscMultiplierCount();

function GetDiscMultiplierCost() {
    MultiplierCost.innerHTML = "Pay Entry Fee: " + DiscMultiplierCost.toFixed(2);
};
GetDiscMultiplierCost();

MultiplierButton.onclick = function AddDiscMultiplier() {
    if (Discs >= DiscMultiplierCost) {
        Discs -= DiscMultiplierCost;
        DiscMultiplier += 1;
        if (AutoCLicker > 0) {
            DiscMuliplyAmount = Math.pow(1.20, DiscMultiplier);
        }
        else {
            DiscMuliplyAmount += 1.20;
        }
        DiscMultiplierCost = DiscMultiplierCost * 1.10;
        GetDiscMultiplierCount();
        GetDiscMultiplierCost();
        GetDiscCount();
        DiscsPerSecond();
        console.log(DiscMuliplyAmount);

    }
    else {
        MultiplierCost.innerHTML = "Insufficient Funds";
        MultiplierCost.style.color = "red";

    }
};

function ActivateDiscMultiplier() {
    if (0 == AutoCLicker && DiscMultiplier > 0) {
        Discs += ((DiscMuliplyAmount) + AutoCLicker);
    }
    else {
        Discs += ((DiscMuliplyAmount - 1) + AutoCLicker);
    }

    GetDiscCount();
};

//______________________________________________________________________Multiplier End


//______________________________________________________________________Store Availibilty
function Unavailible() {
    if (Discs < AutoClickerCost) {
        document.getElementById("Auto").style.opacity = .3;
    }
    else if (Discs >= AutoClickerCost) {
        document.getElementById("Auto").style.opacity = 1;
        ClickerCost.innerHTML = "Pay Entry Fee: " + AutoClickerCost.toFixed(2),
            ClickerCost.style.color = "white";
    }
    if (Discs < DiscMultiplierCost) {
        document.getElementById("Multi").style.opacity = .3;
    }
    else if (Discs >= DiscMultiplierCost) {
        document.getElementById("Multi").style.opacity = 1;
        MultiplierCost.innerHTML = " Sign A Sponser: " + DiscMultiplierCost.toFixed(2),
            MultiplierCost.style.color = "white";
    }
}

function ResetGame() {
    window.location.reload();
};

//------------------Extras

function NewBackground(){
    document.body.style.backgroundImage = "url('../images/Background.jpg')";
    document.getElementById('NewBackground').style.display = "none";
    document.getElementById('NewDisc').style.display = "none";
    document.getElementById('Acheivement').style.display = "none";
    document.getElementById('AcheivementB').style.display = "none";
    document.getElementById('AcheivementBox').style.opacity = 0;
}

function NewDisc(){
    document.getElementById('DiscImage').style.backgroundImage ="url('../images/Firebird.png')";
    document.getElementById('NewDisc').style.display = "none";
    document.getElementById('NewBackground').style.display = "none";
    document.getElementById('Acheivement').style.display = "none";
    document.getElementById('AcheivementB').style.display = "none";
    document.getElementById('AcheivementBox').style.opacity = 0;

}

function Extras(){
    if(Discs >= 10){
        document.getElementById("Extras").style.display="grid";
        document.getElementById("AcheivementBox").style.display="grid";
    }
}

//_______________Key Command

var isKeyPressed = {
    'a':false,
    'c':false,
    'e':false,
};

document.onkeydown = (keyDownEvent) => {
    isKeyPressed[keyDownEvent.key] = true;
    if(isKeyPressed["a"] && isKeyPressed["c"] && isKeyPressed["e"]){
        Discs += 1000;
    }
};

document.onkeyup = (keyUpEvent) => {
    isKeyPressed[keyDownEvent.key] = false;
};