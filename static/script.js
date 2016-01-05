// Quotes.net Api Call

function fetchQuoteData() {
    var baseUrl = "http://api.forismatic.com/api/1.0/",
        method = "?method=getQuote",
        lang = "&lang=en",
        format = "&format=json&jsonp=?",
        apiUrl = baseUrl + method + lang + format;
}
