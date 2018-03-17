//Declare Global Variables

$(document).ready(function(){

    /* document.getElementById('textnotepad2').style.visibility = 'hidden';
     document.getElementById('textnotepad3').style.visibility = 'hidden';
     document.getElementById('textnotepad4').style.visibility = 'hidden';*/
});

//document.getElementById('transaction').onclick = DrawArrows();

function DrawArrows() {
    var arrows=document.getElementById('showarrows');
    arrows.className = 'show';

    var text1=document.getElementById('textnotepad1');
    text1.className = 'showtextnotepad1';

    var text2=document.getElementById('textnotepad2');
    text2.className = 'showtextnotepad2';

    var text3=document.getElementById('textnotepad3');
    text3.className = 'showtextnotepad3';

    var text4=document.getElementById('textnotepad4');
    text4.className = 'showtextnotepad4';

    var text5=document.getElementById('textbignotepad');
    text5.className = 'showtextbignotepad';

}



