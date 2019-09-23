
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.

process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   var given_number = Number( input_from_user ) ;

   if ( given_number < 0 )
    {
        process.stdout.write( "\n Negative numbers not allowed! \n\n" ) ;
        process.exit() ;
    }
   var winning_number = given_number * 2 ;

   process.stdout.write( "\n You typed in " + given_number + "."
                      +  "\n My numbers are " + winning_number  + ", " + (winning_number + 1) + " and " + (winning_number + 2) + "."
                      +  "\n Sorry, you lost. I won. The game is over.\n\n" ) ;
   console.log("Your number divided by Pi is " + (given_number / Math.PI));
   console.log("Your numbers square root is " + Math.sqrt(given_number));
   process.exit() ;

} ) ;

//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.

