var Discs = 0;
var AutoCLicker = 0;
var AutoClickerCost = 80;
var DiscMultiplier = 0;
var DiscMuliplyAmount = 0;
var DiscMultiplierCost = 100;

//_______________________________________________________________________Base Clicker Start

function GetDiscCount() {
    document.getElementById("DiscCount").innerHTML = Discs.toFixed(2);
    Unavailible();
    Rewards();
    Rewards2();
    Rewards3();
    Rewards4();
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
    audioChains.play();
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
    audioChains.play();
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


function Rewards() {
    if (Discs >= 1000) {
        document.getElementById("Rewards").style.display = "grid";
        document.getElementById("AcheivementBox").style.display = "grid";
    }
    
}


function NewBackground() {
    document.body.style.backgroundImage = "url('../images/Background.jpg')";
    document.getElementById('NewBackground').style.display = "none";
    document.getElementById('NewDisc').style.display = "none";
    document.getElementById('Acheivement').style.display = "none";
    document.getElementById('AcheivementB').style.display = "none";
    document.getElementById('AcheivementBox').style.opacity = 0;
}

function NewDisc() {
    document.getElementById('DiscImage').style.backgroundImage = "url('../images/Firebird.png')";
    document.getElementById('NewDisc').style.display = "none";
    document.getElementById('NewBackground').style.display = "none";
    document.getElementById('Acheivement').style.display = "none";
    document.getElementById('AcheivementB').style.display = "none";
    document.getElementById('AcheivementBox').style.opacity = 0;
}





function Rewards2() {
    if (Discs >= 2000) {
        document.getElementById("Rewards").style.display = "none";
        document.getElementById("AcheivementBox").style.display = "none";
        document.getElementById("Rewards2").style.display = "grid";
        document.getElementById("AcheivementBox2").style.display = "grid";
    }
}


function NewBackground2() {
    document.body.style.backgroundImage = "url('../images/background3.jpg')";
    document.getElementById('NewBackground2').style.display = "none";
    document.getElementById('NewDisc2').style.display = "none";
    document.getElementById('Acheivement2').style.display = "none";
    document.getElementById('AcheivementB2').style.display = "none";
    document.getElementById('AcheivementBox2').style.opacity = 0;
}

function NewDisc2() {
    document.getElementById('DiscImage').style.backgroundImage = "url('../images/Roc3.png')";
    document.getElementById('NewDisc2').style.display = "none";
    document.getElementById('NewBackground2').style.display = "none";
    document.getElementById('Acheivement2').style.display = "none";
    document.getElementById('AcheivementB2').style.display = "none";
    document.getElementById('AcheivementBox2').style.opacity = 0;

}





function Rewards3() {
    if (Discs >= 3000) {
        document.getElementById("Rewards2").style.display = "none";
        document.getElementById("AcheivementBox2").style.display = "none";
        document.getElementById("Rewards3").style.display = "grid";
        document.getElementById("AcheivementBox3").style.display = "grid";
    }
}


function NewBackground3() {
    document.body.style.backgroundImage = "url('../images/background4.jpg')";
    document.getElementById('NewBackground3').style.display = "none";
    document.getElementById('NewDisc3').style.display = "none";
    document.getElementById('Acheivement3').style.display = "none";
    document.getElementById('AcheivementB3').style.display = "none";
    document.getElementById('AcheivementBox3').style.opacity = 0;
}

function NewDisc3() {
    document.getElementById('DiscImage').style.backgroundImage = "url('../images/Wraith.png')";
    document.getElementById('NewDisc3').style.display = "none";
    document.getElementById('NewBackground3').style.display = "none";
    document.getElementById('Acheivement3').style.display = "none";
    document.getElementById('AcheivementB3').style.display = "none";
    document.getElementById('AcheivementBox3').style.opacity = 0;

}



function Rewards4() {
    if (Discs >= 4000) {
        document.getElementById("Rewards3").style.display = "none";
        document.getElementById("AcheivementBox3").style.display = "none";
        document.getElementById("Rewards4").style.display = "grid";
        document.getElementById("AcheivementBox4").style.display = "grid";
    }
}


function NewBackground4() {
    document.body.style.backgroundImage = "url('../images/background5.jpg')";
    document.getElementById('NewBackground4').style.display = "none";
    document.getElementById('NewDisc4').style.display = "none";
    document.getElementById('Acheivement4').style.display = "none";
    document.getElementById('AcheivementB4').style.display = "none";
    document.getElementById('AcheivementBox4').style.opacity = 0;
}

function NewDisc4() {
    document.getElementById('DiscImage').style.backgroundImage = "url('../images/SextonFireBird.png')";
    document.getElementById('NewDisc4').style.display = "none";
    document.getElementById('NewBackground4').style.display = "none";
    document.getElementById('Acheivement4').style.display = "none";
    document.getElementById('AcheivementB4').style.display = "none";
    document.getElementById('AcheivementBox4').style.opacity = 0;

}



const audioChains = new Audio("../sounds/DiscGolfChains.mp3");
audioChains.volume = 0.1;


//_______________Key Commands

var isKeyPressed = {
    'a': false,
    'c': false,
    'e': false,

    'p': false,
    'u': false,
    't': false,

    'd': false,
    'r': false,
    'v': false,
};

document.onkeydown = (keyDownEvent) => {
    isKeyPressed[keyDownEvent.key] = true;
    if (isKeyPressed["a"] && isKeyPressed["c"] && isKeyPressed["e"]) {
        Discs += 1000;
    };
    document.onkeyup = (keyUpEvent) => {
        isKeyPressed[keyDownEvent.key] = false;
    };
    if (isKeyPressed["p"] && isKeyPressed["u"] && isKeyPressed["t"]) {
        Discs += 100;
    };
    document.onkeyup = (keyUpEvent) => {
        isKeyPressed[keyDownEvent.key] = false;
    };
    if (isKeyPressed["d"] && isKeyPressed["r"] && isKeyPressed["v"]) {
        Discs += 80;
    };
    document.onkeyup = (keyUpEvent) => {
        isKeyPressed[keyDownEvent.key] = false;
    };
};


