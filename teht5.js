
//  Reverse.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-19 File created.   2017-08-14 Last modification.

var given_numbers = [] ;

process.stdout.write( "\n This program reads numbers from the keyboard."
                   +  "\n After receiving a zero, it prints the numbers"
                   +  "\n in reverse order. Please, start entering numbers."
                   +  "\n The program will stop when you enter a zero.\n\n" ) ;

process.stdout.write( "   "  +  given_numbers.length 
                   +  "  Enter a number: ") ;

process.stdin.on( "data", function( input_from_user )
{
   // This function will be executed always after
   // the user has typed in a number.

   var number_from_keyboard = Number( input_from_user ) ;

   // The push() method adds the number to the end of the array.
   if (number_from_keyboard > 14 || number_from_keyboard < 1){}
   else if (given_numbers.length < 7){
       var bool = false;
       for (var i = 0; i < given_numbers.length; i++){
           if (given_numbers[i] == number_from_keyboard) {
               bool = true;
                console.log("Number is already stored!");
            }
       }
       if (bool == false) given_numbers.push( number_from_keyboard ) ;
   }

   if ( number_from_keyboard == 0 )
   {
      process.stdout.write( "\n Reverse order:  " ) ;

      var number_index = given_numbers.length ;

      while ( number_index > 0 )
      {
         number_index -- ;
         process.stdout.write( given_numbers[ number_index ] + "   " ) ;
      }

      process.stdout.write( "\n\n" ) ;

      process.exit() ;  // This terminates the program.
   }
   else if (given_numbers.length > 6){
       for (var i = 6; i > -1; i--){
           process.stdout.write(given_numbers[i] + " ");
       }
       var random_numbers  =  [] ; // this array is initially empty

       var number_counter = 0 ;
       
       while ( number_counter < 7 )
       {
          // Math.random() returns a double value in the range 0 .... 0.99999999
          // The returned random value can be zero but it cannot be one.
       
          var randomed = Math.floor( Math.random() * 14 + 1 );
          var booltemp = false;
          for (i = 0; i < random_numbers.length; i++){
              if (random_numbers[i] == randomed) booltemp = true;
          }
          if (booltemp == false){
            number_counter ++ ;
            random_numbers.push(randomed);
          }
       }
       
       process.stdout.write(
            "\n\n Random numbers printed with a traditional for loop:\n\n " ) ;
       
       for ( let number_index  =  0 ;
                 number_index  <  random_numbers.length ;
                 number_index  ++ )
       {
          process.stdout.write( "  "  +  random_numbers[ number_index ] ) ;
       }
       
       process.stdout.write( "\n\n" ) ;
       var numbers_correct = 0;
       for (var i = 0; i < 7; i++){
           for(var j = 0; j < 7; j++){
               if (given_numbers[i] == random_numbers[j]) numbers_correct++;
           }
       }
       console.log("You had guessed " + numbers_correct + " numbers correctly!");
       process.exit();
   }
   else
   {
      // We are not finished. Let's ask for one more number.
      // The length property tells how many elements the array has,
      // i.e. how many numbers have been entered.

      process.stdout.write( "   "  +  given_numbers.length 
                         +  "  Enter a number: ") ;
   }
} ) ;