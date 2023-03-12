// Code your solution in this file!
const headQuarter = 42;
function distanceFromHqInBlocks(location) {
  if (location >= 42) {
    return location - headQuarter;
  } else {
    return headQuarter - location;
  }
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(someValue) {
  const store = distanceFromHqInBlocks(someValue);
  return store * 264;
}

console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

console.log(distanceTravelledInFeet(38, 34));

function calculatesFarePrice(start, destination) {
  const st = distanceTravelledInFeet(start, destination);
  if (st <= 400) {
    return 0;
  } else if (st > 400 && st <= 2000) {
    return (st - 400) * 0.02;
  } else if (st > 2000 && st <= 2500) {
    return 25;
  } else {
    return `cannot travel that far`;
  }
}

console.log(calculatesFarePrice(34, 32));
