
if (annyang) {
    
    // Let's define a command.
    var commands = {
        'show me *tag': function(d) { window.open("https://duckduckgo.com/?q=" +d) },
        "find me a book about *what": function(book) { window.open("http://www.allitebooks.com/?s=" +book) },
        "post *this": function(what) {document.querySelector(".words").innerHTML += what;},
        "remove": function() {document.querySelector(".words").innerHTML = ""},
        "open *link": function (lin) { window.open("https://"+lin+".com") },
        "youtube *some": function (querry) { window.open("https://www.youtube.com/results?search_query=" + querry, "", '') },
        "show commands": function() {document.querySelector(".commands").innerHTML = "show me || find me a book about || write || remove || open || youtube"},
        "hide commands": function () {document.querySelector(".commands").innerHTML = ""},
        "console.log*input": function(input) {console.log(input)}   
    }

    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
