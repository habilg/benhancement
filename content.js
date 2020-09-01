document.querySelector("#MainBox").style.width = "53%"
document.querySelector("#MainBox").style.float = "right"

document.querySelector("#tabs").style.float = "right"
document.querySelector("#tabs").style.width = "7%"
var fundamentalPanel = document.createElement('div')
fundamentalPanel.style.width = "20%"
fundamentalPanel.style.height = "1000px"
fundamentalPanel.style.backgroundColor = "yellow"
fundamentalPanel.style.float = "right"
var target = document.querySelector("#form1")
target.insertAdjacentElement("beforeend", fundamentalPanel)


var widgetPanel = document.createElement('div')
widgetPanel.style.width = "20%"
widgetPanel.style.height = "1000px"
widgetPanel.style.backgroundColor = "red"
widgetPanel.style.float = "left"
var target = document.querySelector("#form1")
target.insertAdjacentElement("beforeend", widgetPanel)




//my aim

//1-create PAYAM NAZER
//2- AKHARIN VAZIAT namad
//3- buyersPower chart

var buyerPower = () => {
    return (parseFloat(document.querySelector("#e0").textContent) * parseFloat(document.querySelector("#e8").textContent)) / (parseFloat(document.querySelector("#e3").textContent) * parseFloat(document.querySelector("#e5").textContent)).toFixed(2)
}

var corpSupply = () => {
    var corpSellPortion = parseFloat(document.querySelector("#e4").textContent) / (parseFloat(document.querySelector("#e4").textContent) + parseFloat(document.querySelector("#e3").textContent))
    var realBuyPortion = parseFloat(document.querySelector("#e0").textContent) / (parseFloat(document.querySelector("#e0").textContent) + parseFloat(document.querySelector("#e1").textContent))
    return (corpSellPortion * realBuyPortion * 100).toFixed(2)
}

var dealBasePortion = () => {

    return (parseInt(document.querySelector("#d09 > div").getAttribute('title')) / parseInt(document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > div").getAttribute('title'))).toFixed(2)
}

var dealToMean = () => {
    return (parseInt(document.querySelector("#d09 > div").getAttribute('title')) / parseInt(document.querySelector("#TopBox > div.box2.zi1 > div:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(2) > div").getAttribute('title'))).toFixed(2)
}


//cahnge box 6 style / 
var changeStyleOfBox6 = () => {
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(6)") //blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(2)") // blue
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(3)")//red
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2)")//green
    document.querySelector("#TopBox > div.box2.zi2 > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(3)")//red
}

//convert table to chart
var convertBox6toChart = () => {

    let chartElement = document.createElement('div')
    chartElement.id = "chartarea"
    var target = document.querySelector('.box2.zi2 .box6')
    target.insertAdjacentElement("beforeend", chartElement)

    let xAxis = {
        visble: false
    }
    let yAxis = {
        visible: false
    }
    let chart = {
        // renederto:'??'
    }
    let tooltip = {
        enabled: false
    }
    let legend = {
        enabled: false
    }
    let credits = {
        enabled: false
    }
    let series = [
        {
            name: 'real',
            data: [
                { y: `${parseFloat(document.querySelector("#e0 > div:nth-child(2)").getAttribute('title'))}`, color: 'green' }, //خرید حقیقی
                { y: `${parseFloat(document.querySelector("#e3 > div:nth-child(2)").getAttribute('title'))}`, color: '#FF0000' }] //فروش حقیقی
        }
        ,
        {
            name: 'corp',
            data: [
                { y: `${parseFloat(document.querySelector("#e1 > div:nth-child(2)").getAttribute('title'))}`, color: 'green' }, //خرید حقوقی
                { y: `${parseFloat(document.querySelector("#e4 > div:nth-child(2)").getAttribute('title'))}`, color: '#FF0000' }] // فروش حقوقی
        }
    ]
    let plotOptions = {
        bar: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        },
        series: {
            stacking: 'percent',
            groupPadding: 0,
            // pointPadding: 0,
        }
    };
    let json = {};

    // json.title = title;
    // json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;
    json.plotOptions = plotOptions;
    json.credits = credits;
    json.chart = chart

    Highcharts.chart('chartarea', json)
}






// monitor changes in buy que volume
var volQueObserver = () => {
    var point = {
        s: 0,
        v: 0,
        b: 0,
    }

    var scope = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(2)")// buyers que
    var observer = new MutationObserver(mutationRecord => {
        point.b = mutationRecord //?
        point.s = document.querySelector("#bl > tr:nth-child(2) > td:nth-child(5)").textContent;
        point.v = document.querySelector("#d09 > div").getAttribute('title');
        updateQVplot(point)
    })
    observer.observe(scope, {
        childList: true
    })
}


var updateQVplot = (point) => {
    var points = [];
    points.push(point);
    //setup highcharts and draw ...
}