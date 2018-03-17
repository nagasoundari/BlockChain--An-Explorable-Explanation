// initialize your variables outside the function
var TimeWatch, TimeRandom;
var watchSeconds = 0;
var randomNumberSeconds = 0;
var cubeClicked = 0;
var time;
var secs;


$(document).ready(function(){

    $('#cube1').click( function() {
        disableallcubes();
        document.getElementById("cube1").src = "images/redcube.png";
        document.getElementById("cube2").src = "images/redcube.png";
        document.getElementById("cube3").src = "images/redcube.png";
        document.getElementById("cube4").src = "images/redcube.png";
        $('#bigchain1').addClass('hide');
        $('#bigchain2').addClass('hide');
        $('#bigchain3').addClass('hide');
        cubeClicked = 1;
        time = 40;
        startWatch();
        startRandomtextdisplay();
    });

    $('#cube2').click( function() {
        disableallcubes();
        document.getElementById("cube2").src = "images/redcube.png";
        document.getElementById("cube3").src = "images/redcube.png";
        document.getElementById("cube4").src = "images/redcube.png";
        $('#bigchain2').addClass('hide');
        $('#bigchain3').addClass('hide');
        cubeClicked = 2;
        time = 30;
        startWatch();
        startRandomtextdisplay();
    });

    $('#cube3').click( function() {
        disableallcubes();
        document.getElementById("cube3").src = "images/redcube.png";
        document.getElementById("cube4").src = "images/redcube.png";
        $('#bigchain3').addClass('hide');
        cubeClicked = 3;
        time = 20;
        startWatch();
        startRandomtextdisplay();
    });

    $('#cube4').click( function() {
        disableallcubes();
        document.getElementById("cube4").src = "images/redcube.png";
        cubeClicked = 4;
        time = 10;
        startWatch();
        startRandomtextdisplay();
    });

});


function startWatch() {
    secs = ( watchSeconds < 10 ) ? ( '0' + watchSeconds ) : ( watchSeconds );

    // display the stopwatch
    var x = document.getElementById("timer");
    x.innerHTML = 'Time: ' + secs + ' secs';
    /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
    watchSeconds++;
    /* call the setTimeout( ) to keep the stop watch alive ! */

    if (watchSeconds <= time) {
        TimeWatch = setTimeout("startWatch()", 1000);
    }else {
        clearTimeout(TimeWatch);
        time = 0;
        $("#timer").addClass("blink_time");
    }
}


function startRandomtextdisplay() {

    //var binary = (Math.floor(Math.random() * 100000000) + 1).toString(2);
    var binary = (Math.floor(Math.random() * (4294967295 - 2147483648) + 2147483648)).toString(2);
   // Math.random() * (4294967295 - 0) + 0;
    //0	4294967295
    var imageid, numberid, numberid1;
    var chainid = '';

    if(cubeClicked ==1){
        imageid = 'cube1';
        numberid = '#binary1';
        numberid1 = 'binary1';
    } else if(cubeClicked == 2){
        imageid = 'cube2';
        numberid = '#binary2';
        numberid1 = 'binary2';
        chainid = '#bigchain1';
    } else if(cubeClicked == 3){
        imageid = 'cube3';
        numberid = '#binary3';
        numberid1 = 'binary3';
        chainid = '#bigchain2';
    } else if(cubeClicked == 4){
        imageid = 'cube4';
        numberid = '#binary4';
        numberid1 = 'binary4';
        chainid = '#bigchain3';
    }

    var element = document.getElementById(numberid1);
    element.innerHTML = binary;
    randomNumberSeconds++;

    if (randomNumberSeconds <= 10) {
        TimeRandom = setTimeout("startRandomtextdisplay()", 1000);
    } else {
        clearTimeout(TimeRandom);
        //time = 0;
        randomNumberSeconds = 0;
        $(numberid).addClass("blink_time");
        document.getElementById(imageid).src = "images/cubes.jpg";
        if(chainid != ''){
            $(chainid).toggleClass('showbigchain');
        }

        cubeClicked = cubeClicked + 1
        startRandomtextdisplay();
    }
}

function disableallcubes() {
    document.getElementById("cube1").disabled = true;
    document.getElementById("cube2").disabled = true;
    document.getElementById("cube3").disabled = true;
    document.getElementById("cube4").disabled = true;

    document.getElementById("cube1").style.opacity = 0.7;
    document.getElementById("cube2").style.opacity = 0.7;
    document.getElementById("cube3").style.opacity = 0.7;
    document.getElementById("cube4").style.opacity = 0.7;
}

