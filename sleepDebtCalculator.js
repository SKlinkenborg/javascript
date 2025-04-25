let hoursSlept = {
    "monday":24,
    "tuesday":8,
    "wednesday":8,
    "thursday":8,
    "friday":8,
    "saturday":8,
    "sunday":8
  };
  
  function getSleepHours(day) {
    return hoursSlept[day];
  }
  
  function getActualSleepHours() {
    let totalSleep = 0;
    for (const [key,value] of Object.entries(hoursSlept)) {
      totalSleep += value;
    }
    return totalSleep;
  }
  
  let idealHours = x => x * 7;
  
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = idealHours(8);
    let diff = idealSleepHours - actualSleepHours;
    if (diff == 0) {
        result = "You nailed it!";
    } else if (diff < 0) {
        result = "You overshot the mark. Reduce your sleep by " + (diff * -1) + " hours";
    } else if (diff > 0) {
        result = "You must rest more! Short by " + diff + " hours.";
    } else {
        result = "You've enter a weird place.";
    }
    return result;
  }
  
  console.log(calculateSleepDebt())