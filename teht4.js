console.log("This program prints conversion tables.\
\nType a letter to select a conversion table\
\nm miles to kilometers\
\nk kilometers to miles\
\np pounds to kilograms\
\nx to exit");
process.stdin.on( "data", function( input_from_user ){
    var user_selection = String( input_from_user ).charAt( 0 ) ;
if ( user_selection == 'k' || user_selection == 'K' ){
    for(var i = 10.0; i < 120.0; i = i + 10.0){
        console.log(i + " kilometers is equal to " + (i / 1.609344) + " miles.");
    }
} else if ( user_selection == 'm' || user_selection == 'M' ){
    for(var i = 10.0; i < 120.0; i = i + 10.0){
        console.log(i + " miles is equal to " + (i * 1.609344) + " kilometers.");
    }
} else if ( user_selection == 'x' || user_selection == 'X' ){
    process.exit();
} else if ( user_selection == 'p' || user_selection == 'P' ){
    for(var i = 10.0; i < 120.0; i = i + 10.0){
        console.log(i + " pounds is equal to " + (i * 0.4536) + " kilograms.");
    }
}
console.log("This program prints conversion tables.\
\nType a letter to select a conversion table\
\nm miles to kilometers\
\nk kilometers to miles\
\np pounds to kilograms\
\nx to exit");
});
