console.log(" This program can convert your height.\n Please type in your height in centimeters : ");
process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   var given_number = Number( input_from_user ) ;
   var given_number_in_inches = given_number / 2.54;
   var feet = Math.floor(given_number / 30.48);
   var inches = Math.floor((given_number - 30.48 * feet) / 2.54);
   console.log("Your height in inches is " + given_number_in_inches);
   console.log("That equals " + feet + " ft " + inches + " in");
   if (given_number < 60){
       console.log("Only " + given_number + " centimeters! Are you really that short!");
   } else if (given_number > 190){
       console.log("Wow " + given_number + " centimeters thats really tall!");
   } else if ((given_number > 159) && (given_number < 191)) {
       console.log("Thats quite average height.");
   }
   process.exit();
});
