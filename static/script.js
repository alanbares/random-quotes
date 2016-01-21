/*global $ */

$(document).ready(function() {
    var $author=$("#author"),
        $quotes=$("#quoteMachine"),
        $tweetButton=$(".twitter-share-button"),
        $quoteButton=$("#quoteButton");



    //Forismatic api call
	function getQuotes() {
		var baseUrl = "http://api.forismatic.com/api/1.0/",
        method = "?method=getQuote",
        lang = "&lang=en",
        format = "&format=jsonp&jsonp=?",
        apiUrl = baseUrl + method + lang + format;

    console.log("url", apiUrl);

    //Display data on page and tweets data out
    $.getJSON(apiUrl, function (data) {
       console.log("data", data);
       $quotes.html("<p>" + data.quoteText + "</p>");
       $tweetButton.attr("href", 'https://twitter.com/intent/tweet?text=' + data.quoteText);

        // Displays Unknown if quote has no author
        if (data.quoteAuthor === "") {
            $author.html("Unknown");
        }
        else {
            $author.html(data.quoteAuthor);
        }
	});
	}

    //Quote
	$quoteButton.click(getQuotes);
});

// Handlebars
//var renderTemplate = function (templateId, targetId, context) {
//    var source = $(templateId).html();
//    var template = Handlebars.compile(source);
//    var html = template(context);
//    $(targetId).append(html);
//}
