//total points from the pdf is 132



//Use comments throughout-5
//Use a global variable-2
let from, to, query, width = 10, i = 0;
//Use a jQuery plug in-10
//when document is ready

$( document ).ready( function() {
    let convert = document.querySelector( "#submit" );
    //Use the event Target property-5
    convert.onclick = convertCurr;
    //Use querySelectorAll()-2
    let donate = document.querySelectorAll( ".donatelink" );
    //Use an Immediately Invoked Function Expression (IFFE)-10
    donate.forEach( function( donate ) {
        //Use a Click event-2
        donate.onclick = progressbar;

    } );


} );
//A custom function-2
//calls api 
let convertCurr = function() {
    //Access a built‐in property for the document object-2
    from = document.getElementById( "fromcurr" ).value;
    to = $( "#tocurr" ).val();

    query = from + "_" + to;
    //Use a 3rd party API-10
    let url = "https://free.currconv.com/api/v7/convert?q=" + query + "&compact=ultra&apiKey=664c4dc5cf48cba715d1";
    //Use a Try ... Catch statement-5
    try {
        fetch( url ).then( res => res.json() ).then( newFunc );
    } catch ( error ) {
        console.error();
    }
};
//A custom function using parameters-5
//convert the currency 
let newFunc = function( data ) {
    //Use an object-2
    //Access a built‐in property for the string object-2
    let dataFrom = data[ query ];
    let inputfrom = document.getElementById( "from" ).value;
    //Use a built‐in method for the number object-2
    document.getElementById( "to" ).value = ( dataFrom * inputfrom ).toFixed( 2 );

};
//progressbar code
let progressbar = function() {
    //Use a locally scoped variable-2
    let bar = document.getElementById( "bar" );
    let cg = document.getElementById( "completedGoals" );
    let a = "Goal completed";



    //Use an If ... Else statement-5
    if ( width == 100 ) {
        i++;
        cg.innerHTML = ( i + "-" + a );
        width = 0;

    } else {
        width++;
        bar.style.width = width + "%";
        //Use the innerHTML property-2
        bar.innerHTML = width + "%";

    }

};

