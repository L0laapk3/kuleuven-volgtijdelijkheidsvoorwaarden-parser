// ==UserScript==
// @name         kuleuven volgtijdelijkheidsvoorwaarden parser
// @version      1
// @author       L0laapk3
// @match        https://onderwijsaanbod.kuleuven.be/*syllabi/*
// @grant        none
// ==/UserScript==

var names = {};
$("[id*='tab_beginvoorwaarden'] .koenrules").each(function(i, e) {
   var a = $(e).text().split(" : ");
    names[a[0]] = a[1];
});
console.log(names);

var a = $("[id*='tab_beginvoorwaarden']").html().split("<br><br>");

var regex = "(" + Object.keys(names).join("|") + ")";

a[1] = a[1].split(" EN ").map(function(e) {
    console.log(e);
    return e + "<span style='color: grey'>&nbsp; - " + names[e.match(regex)[0]] + "</span>";
}).join("<br>EN ");

$("[id*='tab_beginvoorwaarden']").html(a.join("<br><br>"));