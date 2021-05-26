let score = 0, high_score = 0;
let yeti, penguins, current_scores, high_scores, gamediv, audio;


$( document ).ready( function() {

    //This code will run after your page loads

    yeti = document.querySelector( "#yeti" );
    penguins = document.querySelectorAll( ".penguin" );
    current_scores = document.querySelector( "#current_score" );
    high_scores = document.querySelector( "#high_score" );

    gamediv = document.querySelector( "#gamediv" );
    /* $( "#yeti" ).mousedown( function() {
         alert( "Yaaaarrrr!" );
     } );*/
    penguins.forEach( function( _penguin ) {
        _penguin.onclick = penguin_click;
    } );
    yeti.onclick = yeti_click;

    end_game();


} );

const penguin_click = function() {

    let x = this.id;
    x = x.slice( -1 );
    if ( !this.hasAttribute( "data-up" ) ) {
        audio = new Audio( "./audio/squeaks.wav" );
        audio.play();
        this.setAttribute( "data-up", "" );
        score += 1;
        current_scores.innerHTML = score;
        this.style.backgroundImage = "url(./images/penguin_" + x + ".png)";
    }

};

const yeti_click = function() {

    audio = new Audio( "./audio/roar.wav" );
    audio.play();


    if ( high_score < score ) {
        high_score = score;
        high_scores.innerHTML = score;
    }
    score = 0;
    current_scores.innerHTML = score;
    alert( "you lose" );

    for ( let i = 0; i < penguins.length; i++ ) {
        penguins[ i ].removeAttribute( "data-up" );
        penguins[ i ].style.backgroundImage = null;
    }
    end_game();
    setTimeout( reset, 1100 );
};

const reset = function() {
    audio = new Audio( "./audio/reset.wav" );
    audio.play();
};

const end_game = function() {
    const yeti_index = Math.round( Math.random() * ( penguins.length - 1 ) );
    gamediv.insertBefore( yeti, gamediv.children[ yeti_index ] );

};








