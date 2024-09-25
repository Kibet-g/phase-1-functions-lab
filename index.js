// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Calculates the number of feet a passenger travels given a starting block and an ending block.
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  // Given the same starting and ending block, returns the fare for the customer.
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free for first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances over 2000
    } else {
      return 'cannot travel that far'; // Over 2500 feet
    }
  }
  