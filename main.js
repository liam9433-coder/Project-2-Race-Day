let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;
if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly){
  console.log(`The race will commence at 9:30am and your race number is ${raceNumber}`);
} else if(runnerAge > 18 && !registeredEarly){
  console.log(`The race will commence at 11:00am and your race number is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`The race will commence at 12:30pm and your race number is ${raceNumber}`);
} else if (runnerAge === 18){
  console.log(`Go see the registration desk to be assigned a race`);
}
