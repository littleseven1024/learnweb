function drawBar(data) {
    var areaHeight = 350, areaWidth = 550, xLength = 500, yLength = 300, startX = 25, startY = 325;
    var pillarWidth = 25, pillarInterval = 15;
    var pillarColor = "#4e72b8", axisColor = "#464547";
    //获取柱状图中最大的值
    var max = data[0];
    for (var i in data) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    //对比例进行折算
    var percent = 1;
    var svgStart = "<svg width="+areaWidth+" height="+areaHeight+" version='1.1' xmlns='http://www.w3.org/2000/svg'>";
    var svgEnd = "</svg>";
    var row = "<line x1="+ startX +" y1="+ startY +" x2="+ (startX + xLength) +" y2="+ startY +" style='stroke:#464547;stroke-width:1'/>";
    var col = "<line x1=" + startX + " y1=" + startY + " x2=" + startX + " y2=" + (startY - yLength) + " style='stroke:#464547;stroke-width:1'/>";
    var svgT = svgStart + row + col;

    for (let i = 0; i < data.length; i++) {
        let rectStartX = startX + pillarInterval*(i+1) + pillarWidth*i;
        let rectStartY = startY - data[i];
        
        var pillar = "<rect x="+rectStartX+" y="+rectStartY+" width="+pillarWidth+" height="+data[i]+" style='fill:#4e72b8;stroke-width:1;stroke:rgb(0,0,0)'/>";
        svgT += pillar;
    }
    svgT += svgEnd;
    return svgT;

}