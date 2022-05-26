var quoteTextEl = document.querySelector("#quoteText")
var quoteAuthorEl = document.querySelector("#quoteAuthor")

fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var randomIndex = Math.floor(Math.random() * data.length)
        var randomQuote = data[randomIndex]

        console.log(randomQuote)
        quoteTextEl.textContent = randomQuote.text
        quoteAuthorEl.textContent = randomQuote.author
    })