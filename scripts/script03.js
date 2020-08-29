var LongRunnigPagesSite = 'http://cdn7.tsetmc.com';
function ens(ty, sv) {
    var lv = localStorage.getItem("v_" + ty);
    var t;
    if (lv == null || lv != sv) {
        var oX = new XMLHttpRequest();
        oX.open('GET', 'tsev2/res/loader.aspx?t=' + ty + '&_' + sv, false);
        oX.send(null);
        t = oX.responseText;
        if (t[t.length - 1] != ';') return;
        localStorage.setItem("v_" + ty, sv);
        localStorage.setItem("t_" + ty, t)
    } else {
        t = localStorage.getItem("t_" + ty)
    } if (ty == 's') {
        document.write("<style>" + t + "</style>")
    } else {
        var h = document.getElementsByTagName('HEAD').item(0);
        var s = document.createElement("script");
        s.defer = true; s.text = t; h.appendChild(s)
    }
} var version = '475';
ens('j', version);
ens('s', version);
(function (i, s, o, g, r, a, m)
{
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})