$(document).ready(function() {
    machine();

    function machine() {
        var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.@Unknown", "Because it's there.@George Mallory on climbing mountains", "We look forward to the time when the power to love will replace the love of power. Then will our world know the blessing of peace.@William Gladstone", "Peace, like charity, begins at home.@Franklin D. Roosevelt", "I have no special talent. I am only passionately curious.@Albert Einstein", "Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.@Unkown", "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.@Albert Einstein", "We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.@T S Eliot", "One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'@Proverb", "The world is a book and those who do not travel read only one page.@St. Augustine", "You cannot be lonely if you like the person you're alone with.@Dr. Wayne Dyer", "I have decided to make my life my argument.@Albert Schweitzer", "Where the battle rages, there the loyalty of the soldier is proved.@Martin Luther", "Knowledge keeps about as well as fish.@Alfred North Whitehead", "All that is gold does not glitter, not all those who wander are lost; The old that is strong does not wither, deep roots are not reached by the frost.@J.R.R. Tolkien", "Tourists don't know where they've been, travelers don't know where they're going.@Paul Theroux", "The first condition of understanding a foreign country is to smell it.@Rudyard Kipling"];
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteAuthor = randomQuote.split("@");
        $('.citation').text(quoteAuthor[0]);
        $('.author').text(quoteAuthor[1]);
    }
    $(".quote").on("click", function() {
        machine();
    });
    $('.tweet').on("click", function() {
        var myUrl = 'https://twitter.com/intent/tweet?text=' + randomQuote + ' ' + quoteAuthor;
        window.open(myUrl, 'twitter');
        return false;
    });
});