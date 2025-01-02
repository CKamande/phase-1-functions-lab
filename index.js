// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceInFeet = distanceTravelledInFeet(start, destination);

  // Calculate fare based on distance
  if (distanceInFeet <= 400) {
    return 0;  // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;  // 2 cents per foot beyond 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;  // Flat fare of $25 for distance between 2000 and 2500 feet
  } else {
    return 'cannot travel that far';  // Distance over 2500 feet is not allowed
  }
  }
