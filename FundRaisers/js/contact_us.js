let isValid = true;
//Use an object with an array for a property value-2
//Use 10 jQuery methods-15
//Use form validation on 2 inputs-10
$( document ).ready( function() {
    //Use a Focus event-2
    $( "firstname" ).focus();
    $( "#submitForm" ).submit( event => {
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

        //validation for email

        let email = $( "#email" ).val().trim();
        let firstName = $( "#fname" ).val().trim();
        let lastName = $( "#lname" ).val().trim();


        //validation for FirstName&LastName
        //Use a built‐in method for the string object-2


        if ( firstName == "" ) {

            $( "#fname" ).prev().text( "This field is required." );
            fname.style.borderColor = "red";
            isValid = false;
        } else if ( !isNaN( firstName ) ) {
            $( "#fname" ).prev().text( "Entry cannot be a number" );
            fname.style.borderColor = "red";
            isValid = false;
        } else {
            $( "#fname" ).next().text( "" );
        }
        $( "#fname" ).val( firstName );

        //Use an If ... Else If statement-5
        if ( lastName == "" ) {
            $( "#lname" ).prev().text( "This field is required." );
            lname.style.borderColor = "red";
            isValid = false;
        } else if ( !isNaN( lastName ) ) {
            $( "#lname" ).prev().text( "Entry cannot be a number" );
            lname.style.borderColor = "red";
            isValid = false;
        } else {
            $( "#lname" ).next().text( "" );
        }
        $( "#lname" ).val( lastName );

        if ( email == "" ) {
            $( "#email" ).prev().text( "This field is required." );
            email.style.borderColor = "red";
            isValid = false;
            //Use a logical NOT operator-5
        } else if ( !emailPattern.test( email ) ) {
            $( "#email" ).prev().text( "Must be a valid email address." );
            email.style.borderColor = "red";
            isValid = false;
        } else {
            $( "#email" ).next().text( "" );
        }
        $( "#email" ).val( email );
        //Use an If statement-5
        if ( isValid == false ) {
            event.preventDefault();
            alert( "dfzs" );

        } else {
            let comment = $( "#subject" ).val();
            let country = $( "#country" ).val();
            //use an object -2
            let submittedData = [];
            //Access an objects method using dot notation-5
            submittedData.push( { fname: firstName, lname: lastName, Email: email, Country: country, Comment: comment } );
            //Create an object literal-2
            //Access an objects property using dot notation-2
            const a = `Submitted Data \nName: ${ submittedData[ 0 ].fname } ${ submittedData[ 0 ].lname }\nEmail: ${ submittedData[ 0 ].Email }\nCountry: ${ submittedData[ 0 ].Country }\nComments: ${ submittedData[ 0 ].Comment } \n`;

            alert( a );

        }



    } );
} );
