$(document).ready(function(){
    document.getElementById("verifyblock").disabled = true;
    document.getElementById("verifyblock").style.background='#DAF7A6';
});

function createBlock() {
    var block1=document.getElementById('createblock');
    block1.className = 'showblock';

    document.getElementById("verifyblock").disabled = false;
    document.getElementById("verifyblock").style.background='#4CAF50';
}


function verifyBlock() {
    //var arrows=document.getElementById('showarrows');
    //arrows.className = 'show';

    document.getElementById("newblock1").src = "images/cubes.jpg";
    document.getElementById("newblock2").src = "images/cubes.jpg";
    document.getElementById("newblock3").src = "images/cubes.jpg";
    document.getElementById("newblock4").src = "images/cubes.jpg";

    var chainconnect = document.getElementById('connectchain');
    chainconnect.className = 'showchain';
}
