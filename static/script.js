/*global $ */

// Forismatic Api Call
$("button").click (function() {
    var baseUrl = "http://api.forismatic.com/api/1.0/",
        method = "?method=getQuote",
        lang = "&lang=en",
        format = "&format=json&jsonp=?",
        apiUrl = baseUrl + method + lang + format;

    console.log("url", apiUrl);

    $.getJSON(apiUrl, function (data) {
       console.log("data", data)
    });
});
