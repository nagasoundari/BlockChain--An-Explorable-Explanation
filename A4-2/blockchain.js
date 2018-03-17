var svgContainer;
$(document).ready(function(){
    init();
    $("span#s1").mouseover(function(){
        $("."+"two").css("color","blue");
        $("."+"two").css("font-weight","bold");
        $("."+"one").css("font-weight","bold");
        $("."+"one").css("color","#D35400");
    });

    $("span#s1").mouseout(function(){
        $("."+"two").css("color","black");
        $("."+"one").css("color","black");
        $("."+"two").css("font-weight","normal");
        $("."+"one").css("font-weight","normal");
    });
    $("span#s2").mouseover(function(){
        $("#"+"zero").css("font-weight","bold");
        $("#"+"zero").css("color","#ff0080");
    });
    $("span#s2").mouseout(function(){
        $("#"+"zero").css("color","black");
        $("#"+"zero").css("font-weight","normal");

    });
});

//Global Variables
var w=800, h=300, n=3;
var px;
//Cube Parameters
var p1x = 75;
var p1y = 25;
var theta = Math.PI / 2.8;
var length = 50;

var pol1Data;

var pol2Data;

var pol3Data;

function init() {
    svgContainer = d3.select("body").append("svg")
        .attr("width", w)
        .attr("transform", "translate(650,-50)")
        .attr("height", h);


    var distBetCubes = ((w - (n * 2 * length * Math.sin(theta)) - (2*p1x))/(n-1)) - 20;

    px = [p1x];
    for (var i=1; i<n; i++){
        px.push(p1x + i * 2 * length * Math.sin(theta) + i * distBetCubes);
    }

    for(var i=0; i<n; i++){
        drawCube(px[i],p1y,length,theta);
    }

    var r1x = p1x;
    var r1y = p1y + length + length * Math.cos(theta)+5;
    var lr = 50;
    var br = 2 * length * Math.sin(theta) + (distBetCubes)/2 ;
   /* var rect1Data={x1: r1x,
        y1: r1y,
        x2: r1x + br,
        y2: r1y,
        x3: r1x + br,
        y3: r1y + lr,
        x4: r1x,
        y4: r1y + lr};

    var s=  ""+rect1Data.x1+","+rect1Data.y1+" "+rect1Data.x2+","+rect1Data.y2+" "+rect1Data.x3+","+rect1Data.y3+" "+rect1Data.x4+","+rect1Data.y4 ;
*/
    var hash=[];
    var phash=["0000"];

//Generate Random String for Hash Values
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var j=0; j<n; j++ ) {

        var text = "";
        for (var i = 0; i < 4; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        hash.push(text);
        if(j!=(n-1))
            phash[j+1]=hash[j];
    }
    //hard-coded for n=3
   // for (var i=0; i<n; i++){

        var fo = svgContainer.append('foreignObject')
            .attr('x', px[0])
            .attr('y', r1y)
            .attr('width', br+30)
            .attr('class', 'rect');

        var div = fo.append('xhtml:div')
            .attr('class', 'tooltip')
            .style('stroke',"#7c75d5")
            .style('border',"solid")
           // .style("font-family", "sans-serif")
           // .attr("font-size", "10px")
            .style("stroke-Width", "1px");

    div.append('html')
        .html("<span><b>Hash: </b></span><span class='one'>"+hash[0]+"</span><br/><span><b>Previous Hash: </b></span><span id='zero'>"+phash[0]+"</span>");

    var fo1 = svgContainer.append('foreignObject')
        .attr('x', px[1])
        .attr('y', r1y)
        .attr('width', br+30)
        .attr('class', 'rect');

    var div1 = fo1.append('xhtml:div')
        .attr('class', 'tooltip')
        .style('stroke',"#7c75d5")
        .style('border',"solid")
        // .style("font-family", "sans-serif")
        // .attr("font-size", "10px")
        .style("stroke-Width", "1px");

    div1.append('html')
        .html("<span><b>Hash: </b></span><span class='two'>"+hash[1]+"</span><br/><span><b>Previous Hash: </b></span><span class='one'>"+phash[1]+"</span>");

    var fo2 = svgContainer.append('foreignObject')
        .attr('x', px[2])
        .attr('y', r1y)
        .attr('width', br+30)
        .attr('class', 'rect');

    var div2 = fo2.append('xhtml:div')
        .attr('class', 'tooltip')
        .style('stroke',"#7c75d5")
        .style('border',"solid")
        // .style("font-family", "sans-serif")
        // .attr("font-size", "10px")
        .style("stroke-Width", "1px");

    div2.append('html')
        .html("<span><b>Hash: </b></span><span class='three'>"+hash[2]+"</span><br/><span><b>Previous Hash: </b></span><span class='two'>"+phash[2]+"</span>");

      /*  if (i==0){
            div.append('html')
                .html("<span><b>Hash: </b></span><span>"+hash[i]+"</span><br/><span><b>Previous Hash: </b></span><span>"+phash[i]+"</span>");
        }
        else {
            div.append('html')
                .html("<span><b>Hash: </b></span><span class='h'>" + hash[i] + "</span><br/><span><b>Previous Hash: </b></span><span class='h'>" + phash[i] + "</span>");
            // document.getElementById("ak").innerHTML = hash[i];

        } */
   // }

}

function drawCube(x1,y1,length,theta){
    //Polygon 1 points
     pol1Data={x1: x1,
        y1:y1,
        x2: x1 + length * Math.sin(theta),
        y2: y1 + length * Math.cos(theta),
        x3: x1 + length * Math.sin(theta),
        y3: y1 + length * Math.cos(theta) + length,
        x4: x1,
        y4: y1 + length};


    var string1=  ""+pol1Data.x1+","+pol1Data.y1+" "+pol1Data.x2+","+pol1Data.y2+" "+pol1Data.x3+","+pol1Data.y3+" "+pol1Data.x4+","+pol1Data.y4 ;

    //Draw Polygon 1
    var poly1 = svgContainer.append("polygon")
        .attr("points", string1)
        .style("fill", "#47fa8d")
        .style("stroke", "#7c75d5")
        .style("stroke-Width", "3px")
        .style("stroke-Linecap", "round")
        .on("mouseover", function(d) {
            d3.select(this).style("cursor", "pointer");
        })
        .on("click",function (d) {
            var n=0;
            /*for (var i=0; i<3; i++){
                if(pol1Data.x1==px[i])
                    n=i;

            }*/

            tamperBlock(event.clientX);
        });


    //Polygon 2 points
      pol2Data={x1: pol1Data.x2,
        y1: pol1Data.y2,
        x2: x1 + 2 * length * Math.sin(theta),
        y2: y1,
        x3: x1 + 2 * length * Math.sin(theta),
        y3: y1 + length,
        x4: x1 + length * Math.sin(theta),
        y4: y1 + length * Math.cos(theta) + length};


    var string2=  ""+pol2Data.x1+","+pol2Data.y1+" "+pol2Data.x2+","+pol2Data.y2+" "+pol2Data.x3+","+pol2Data.y3+" "+pol2Data.x4+","+pol2Data.y4 ;

    //Draw Polygon 2
    var poly2 = svgContainer.append("polygon")
        .attr("points", string2)
        .style("fill", "#e95a4e")
        .style("stroke", "#7c75d5")
        .style("stroke-Linecap", "round")
        .style("stroke-Width", "2px")
        .on("mouseover", function(d) {
            d3.select(this).style("cursor", "pointer");
        })
        .on("click",function (d) {

            tamperBlock(event.clientX);
        });

    //Polygon 3 points
    var diag=(length + length*Math.cos(2*theta))/ Math.cos(theta);
      pol3Data={x1: x1,
        y1:y1,
        x2: x1 + length * Math.sin(theta),
        y2: y1 + length * Math.cos(theta),
        x3: x1 + 2 * length * Math.sin(theta),
        y3: y1,
        x4: x1 + length * Math.sin(theta),
        y4: (y1 + length * Math.cos(theta)) - diag};

    var string3=  ""+pol3Data.x1+","+pol3Data.y1+" "+pol3Data.x2+","+pol3Data.y2+" "+pol3Data.x3+","+pol3Data.y3+" "+pol3Data.x4+","+pol3Data.y4 ;

    //Draw Polygon 3
    var poly3 = svgContainer.append("polygon")
        .attr("points", string3)
        .style("fill", "#f7ff84")
        .style("stroke", "#7c75d5")
        .style("stroke-Linecap", "round")
        .style("stroke-Width", "2px")
        .on("mouseover", function(d) {
            d3.select(this).style("cursor", "pointer");
        })
        .on("click",function (d) {

            tamperBlock(event.clientX);
        });


}

function tamperBlock(a){


    if(a>=732 && a<=825){
        $("."+"one").css("text-decoration","none");
        $("."+"two").css("text-decoration","none");
        $("."+"three").css("text-decoration","none");
        $("."+"one").css("text-decoration","line-through");
        $("."+"two").css("text-decoration","line-through");
        $("."+"three").css("text-decoration","line-through");


    }
    if(a>=991 && a<=1084){
       // $("."+"one").css("text-decoration","line-through");
        $("."+"one").css("text-decoration","none");
        $("."+"two").css("text-decoration","none");
        $("."+"three").css("text-decoration","none");
        $("."+"two").css("text-decoration","line-through");
        $("."+"three").css("text-decoration","line-through");
    }
    if(a>=1251 && a<=1344){
        $("."+"one").css("text-decoration","none");
        $("."+"two").css("text-decoration","none");
        $("."+"three").css("text-decoration","none");
       // $("."+"two").css("text-decoration","line-through");
        $("."+"three").css("text-decoration","line-through");
    }
}