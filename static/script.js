/*global $ */

// Forismatic Api Call
//$("button").click (function() {
//    var baseUrl = "http://api.forismatic.com/api/1.0/",
//        method = "?method=getQuote",
//        lang = "&lang=en",
//        format = "&format=jsonp&jsonp=?",
//        apiUrl = baseUrl + method + lang + format;
//
//    console.log("url", apiUrl);
//
//    $.getJSON(apiUrl, function (data) {
//       console.log("data", data)
//	   $("#randomQuotes").append("<p>" + data.quoteText + "</p>");
//    });
//});

$(document).ready(function() {
    var author=$("#author"),
        quotes=$("#randomQuotes")

	function getQuotes() {
		var baseUrl = "http://api.forismatic.com/api/1.0/",
        method = "?method=getQuote",
        lang = "&lang=en",
        format = "&format=jsonp&jsonp=?",
        apiUrl = baseUrl + method + lang + format;

    console.log("url", apiUrl);

    $.getJSON(apiUrl, function (data) {
       console.log("data", data)
	   quotes.html("<p>" + data.quoteText + "</p>");

        // Displays Unknown if quote has no author
        if (data.quoteAuthor === "") {
            author.html("- Unknown");
        }
        else {
            author.html("-" + data.quoteAuthor);
        }
	});
	}

	$(".quoteButton").click (function() {
		getQuotes();
	});
});
// Handlebars
//var renderTemplate = function (templateId, targetId, context) {
//    var source = $(templateId).html();
//    var template = Handlebars.compile(source);
//    var html = template(context);
//    $(targetId).append(html);
//}
