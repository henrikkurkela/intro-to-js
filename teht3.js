
//  Evenodd.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  In this program the remainder operator % is used to test
    whether the given number is even or odd.

    The remainder operator returns the remainder left over when
    its left operand is divided by its right operand.
*/

process.stdout.write( "\n This program can find out whether a number"
                   +  "\n is even or odd. Please, give a number: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   var given_number = Number( input_from_user ) ;
   var random_number = given_number - 5 + Math.floor( Math.random() * 10 ) ;
   if ( isNaN( given_number ) )
    {
    process.stdout.write( "\n You did not type in a number.\n\n" )
    }
    else {
   if ( ( given_number  %  2 )  ==  0 )
   {
      process.stdout.write( "\n  " + given_number + " is even.\n\n" ) ;
   }
   else
   {
      process.stdout.write( "\n  " + given_number + " is odd. \n\n" ) ;
   }
    }
    if(given_number < 9 || given_number > 1001) {
        console.log(given_number + " is not acceptable at all!");
    }
    if (given_number > random_number) console.log("My number was " + random_number + ". You won this game!");
    else if (given_number == random_number) console.log("I picked the same number! Draw!");
    else if (given_number < random_number) console.log("My number was " + random_number + ". I win!");
   process.exit() ;
} ) ;

