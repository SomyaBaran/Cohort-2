function mathMethods(value){
    console.log("Original Value: ", value);

    let round = Math.round(value);  // round up value
    console.log(round);
    let ceiling = Math.ceil(value); // after value
    console.log(ceiling);
    let flooring = Math.floor(value); // before value
    console.log(flooring);
    let randomValue = Math.random(value); // gives a random value
    console.log(randomValue);
    let maxValue = Math.max(5, 10, 15); // identify the max value 
    console.log(maxValue);
    let minValue = Math.min(value); // identify the min value
    console.log(minValue);
    let powerOfTwo = Math.pow(value, 2); // 2^value
    console.log(powerOfTwo);
    let squareRoot = Math.sqrt(value); // square root of the given value 
    console.log(squareRoot);
}
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
