

var theQuote = [
    {
        thequote : "The only way to do great work is to love what you do." ,
        theauthor: "Steve Jobs" 
    },
    {
        thequote : "In the end, it's not the years in your life that count. It's the life in your years." ,
        theauthor: "Abraham Lincoln" 
    },
    {
        thequote : "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
        theauthor: " Winston Churchill" 
    },
    {
        thequote : "The future belongs to those who believe in the beauty of their dreams." ,
        theauthor: "Eleanor Roosevelt" 
    },
    {
        thequote : "The only limit to our realization of tomorrow will be our doubts of today." ,
        theauthor: "Franklin D. Roosevelt" 
    },
    {
        thequote : "Believe you can and you're halfway there." ,
        theauthor: "Theodore Roosevelt" 
    },
    {
        thequote : "Don't watch the clock; do what it does. Keep going." ,
        theauthor: "Sam Levenson" 
    },


];

var checker = 20 ;
function generateQuotes(){
      do{
        var randomIndex = Math.floor(Math.random() * theQuote.length) ;
      }while(checker === randomIndex)
    
      var x  = theQuote[randomIndex].thequote ;
      var y = theQuote[randomIndex].theauthor ;
     
      document.getElementById("qouate").innerHTML = x ;
      document.getElementById("author").innerHTML ="-"+ y ;

}