var svgContainer;
var midX, midY;
$(document).ready(function(){
    init();
});

document.getElementById()

function init() {
    svgContainer = d3.select("body").append("svg")
        .attr("width", 550)
        .attr("transform", "translate(870,-150)")
        .attr("height", 400);

    //Draw the polygon
    var theta= Math.PI/2.8;
    var x1=100;
    var y1=100;
    var length=120;

    //Polygon 1 points
    var pol1Data={x1: x1,
                    y1:y1,
                    x2: x1 + length * Math.sin(theta),
                    y2: y1 + length * Math.cos(theta),
                    x3: x1 + length * Math.sin(theta),
                    y3: y1 + length * Math.cos(theta) + length,
                    x4: x1,
                    y4: y1 + length};

    var string1=  ""+pol1Data.x1+","+pol1Data.y1+" "+pol1Data.x2+","+pol1Data.y2+" "+pol1Data.x3+","+pol1Data.y3+" "+pol1Data.x4+","+pol1Data.y4 ;
    midX=(pol1Data.x1 + pol1Data.x3)/2;
    midY=(pol1Data.y1 + pol1Data.y3)/2;
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
          enableExplaination(1,(pol1Data.x1 + pol1Data.x3)/2, (pol1Data.y1 + pol1Data.y3)/2, length);
        });


    //Polygon 2 points
   var pol2Data={x1: pol1Data.x2,
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
            enableExplaination(2,(pol2Data.x1 + pol2Data.x3)/2, (pol2Data.y1 + pol2Data.y3)/2, length);
        });


    //Polygon 3 points
    var diag=(length + length*Math.cos(2*theta))/ Math.cos(theta);
    var pol3Data={x1: x1,
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
            enableExplaination(3,(pol3Data.x1 + pol3Data.x3)/2, (pol3Data.y1 + pol3Data.y3)/2, length);
        });


}

function enableExplaination(p,a,b,l){

    var points = [
        [a,b],
        [midX+2*l, b]
    ];



    svgContainer.selectAll("circle").remove();
    svgContainer.selectAll("path").remove();
    svgContainer.selectAll("foreignObject").remove();

    var lineGenerator = d3.line()
        .curve(d3.curveCardinal);

    var pathData = lineGenerator(points);

    svgContainer.selectAll('path')
        .data(points)
        .enter()
        .append('path')
        .attr('d', pathData);

// Also draw points for reference

    svgContainer.selectAll('circle')
        .data(points)
        .enter()
        .append('circle')
        .attr('cx', function(d) {
            return d[0];
        })
        .attr('cy', function(d) {
            return d[1];
        })
        .attr('r', 3);



    var fo = svgContainer.append('foreignObject')
            .attr('x', 5+(midX+2*l))
            .attr('y', 5+b)
            .attr('width', 200)
            .attr('class', 'svg-tooltip');

    var div = fo.append('xhtml:div')
                .attr('class', 'tooltip');
    if(p==3) {
        div.append('html')
            .html("<span><b>Data<b/><span/><p>From: \ud83d\udc67<br\>To: \ud83d\udc66<br\>Amount: \ud83d\udcb8</p>");
    }
    else if(p==2){
        div.append('html')
            .html('<span><b>Hash<b/><span/> <br\> <img src="fingerprint.png" alt="fingerprint" height="42" width="42"/>');
    }
    else{
        div.append('html')
            .html("<span><b>Hash of<br/> Previous Block<b/><span/>");
    }

}