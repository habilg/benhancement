document.querySelector("#MainBox").style.width = "75%"
document.querySelector("#tabs").style.width = "5%"
var myPanel = document.createElement('div')
myPanel.style.width = "20%"
myPanel.style.height = "1000px"
myPanel.style.backgroundColor = "red"
myPanel.style.float = "right"
var target = document.querySelector("#form1")
target.insertBefore(myPanel, target.lastChild)

//my aim

//1-create PAYAM NAZER
//2- AKHARIN VAZIAT namad
//3- buyersPower chart

var buyerPower = () => {
    return (parseFloat(document.querySelector("#e0").textContent) * parseFloat(document.querySelector("#e8").textContent)) / (parseFloat(document.querySelector("#e3").textContent) *parseFloat( document.querySelector("#e5").textContent)).toFixed(2)
}

var corpSupply = () => {
    var corpSellPortion = parseFloat(document.querySelector("#e4").textContent) / (parseFloat(document.querySelector("#e4").textContent) + parseFloat(document.querySelector("#e3").textContent))
    var realBuyPortion = parseFloat(document.querySelector("#e0").textContent) / (parseFloat(document.querySelector("#e0").textContent) + parseFloat(document.querySelector("#e1").textContent))
    return (corpSellPortion*realBuyPortion*100).toFixed(2)
}

var dealBasePortion = () => {
    return document.querySelector("#d09 > div").textContent / document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > div").textContent
}

var dealToMean = () => {
    return document.querySelector("#d09 > div").textContent / document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(2) > div").textContent
}


//cahnge box 6 style
var changeStyleOfBox6 = () => {
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(6)") //blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(2)") // blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(3)")//red
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(3)")//red
}





// monitor changes in buy que volume
var volQueObserver = () => {
    var point = {
        s:0,
        v:0,
        b:0,
    }

    var scope = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(2)")// buyers que
    var observer = new MutationObserver(element => {
        point.b=element.valu //?
        point.s = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(5)").textContent; //better is to get the title valu property
        point.v = document.querySelector("#d09 > div").textContent;
        updateQVplot(point)
    })
    observer.observe(scope, {
        childList:true
    })
}


var updateQVplot = (point)=>{
    var points = [];
    points.push(point);
    //setup highcharts and draw ...
}