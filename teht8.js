
//  BigLetters.js  (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2017-08-10  File created.
//  2017-08-10  Last modification.

/*  This program demonstrates:
      - definition and calling of a function
      - the use of arrays of strings
*/

// The following initialized arrays are specified
// with keyword const instead of var because
// will will not be modified in this program.

const letter_A_data =       [ "   XX     ",
                              "  XXXX    ",
                              " XX  XX   ",
                              "XX    XX  ",
                              "XXXXXXXX  ",
                              "XX    XX  ",
                              "XX    XX  " ] ;

const letter_B_data =       [ "XXXXXXX   ",
                              "XX    XX  ",
                              "XX    XX  ",
                              "XXXXXXX   ",
                              "XX    XX  ",
                              "XX    XX  ",
                              "XXXXXXX   " ] ;

const letter_C_data =       [ " XXXXXX   ",
                              "XX    XX  ",
                              "XX        ",
                              "XX        ",
                              "XX        ",
                              "XX    XX  ",
                              " XXXXXX   " ] ;

const letter_D_data =        
[ "XXXXXX    ",
"XX    XX  ",
"XX    xx  ",
"XX    xx  ",
"XX    xx  ",
"XX    XX  ",
"XXXXXX    " ] ;

const letter_E_data =       [ "XXXXXXX   ",
                              "XX        ",
                              "XX        ",
                              "XXXXXXX   ",
                              "XX        ",
                              "XX        ",
                              "XXXXXXX   " ] ;
                              
const unknown_letter_data = [ "????????  ",
                              "????????  ",
                              "????????  ",
                              "????????  ",
                              "????????  ",
                              "????????  ",
                              "????????  " ] ;

// Here we specify a function that will be called later.
// This function takes one parameter (argument)

function get_letter_data( given_letter )
{
 var letter_data ;
 switch ( given_letter )
 {
 case 'A' : letter_data = letter_A_data ; break ;
 case 'B' : letter_data = letter_B_data ; break ;
 case 'C' : letter_data = letter_C_data ; break ;
 case 'D' : letter_data = letter_D_data ; break ;
 case 'E' : letter_data = letter_E_data ; break ;
 default: letter_data = unknown_letter_data ;
 }
 return letter_data ;
}
function print_big_letter( given_letter )
{
 var letter_data = get_letter_data( given_letter )
 for ( let letter_data_line of letter_data )
 {
 process.stdout.write( "\n " + letter_data_line ) ;
 }
 process.stdout.write( "\n" );
}

function print_big_wide_letter( given_letter )
{
 var letter_data = get_letter_data( given_letter )
 for ( let letter_data_line of letter_data )
 {
    process.stdout.write("\n");
 for (var i = 0; i < letter_data_line.length; i++){
     process.stdout.write(letter_data_line[i] + letter_data_line[i]);
 }
 }
 process.stdout.write( "\n" );
}

function print_big_word( given_word ){
    for (var i = 0; i < 7; i++){
        process.stdout.write("\n");
        for (var j = 0; j < given_word.length; j++){
            var letter_data = get_letter_data(given_word[j]);
            process.stdout.write(letter_data[i]);
        }
    }
}


// Here is the 'main' program, which consists of calls
// to the above function.

print_big_letter( 'C' ) ;
print_big_wide_letter('E');
print_big_word("ABCD");
