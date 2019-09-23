console.log("Please give a temperature:");
let temperature;

process.stdin.on("data", process_input = input => {
    if (isNaN(parseFloat(input))) {
        character = input.toString().trim().toUpperCase();
        if (character == 'C') {
            print_celsius_table();
        }
        else if (character == 'F') {
            print_fahrenheit_table();
        }
        process.exit();
    }
    else {
        temperature = input.toString().trim();
        console.log(temperature + " C is equal to " + celsius_to_fahrenheit(temperature) + " F.");
        console.log(temperature + " F is equal to " + fahrenheit_to_celsius(temperature) + " C.");
        process.exit();
    }
});

fahrenheit_to_celsius = fahrenheit => {
    return (fahrenheit - 32) / 1.8;
}

celsius_to_fahrenheit = celsius => {
    return celsius * 1.8 + 32;
};

print_celsius_table = () => {
    console.log("CELSIUS FAHRENHEIT")
    for (let i = 0; i < 101; i = i + 10){
        console.log(i.toPrecision(3) + " C     " + celsius_to_fahrenheit(i).toPrecision(3) + " F");
    }
};

print_fahrenheit_table = () => {
    console.log("FAHRENHEIT CELSIUS")
    for (let i = 0; i < 101; i = i + 10){
        console.log(i.toPrecision(3) + " F     " + fahrenheit_to_celsius(i).toPrecision(3) + " C");
    }
};