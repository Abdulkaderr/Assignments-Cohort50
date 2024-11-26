/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

export function rollDie() {
  return new Promise((resolve, reject)=>{
      // Compute a random number of rolls (3-10) that the die MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
    
    rollOnce(1,randomRollsToDo)
    .then(resolve)
    .catch(reject);
  })}

  const rollOnce = (roll,totalRolls) => {
    return new Promise((resolve, reject)=>{
// Compute a random die value for the current roll
const value = Math.floor(Math.random() * 6) + 1;
console.log(`Die value is now: ${value}`);
 
    // Use callback to notify that the die rolled off the table after 6 rolls
    if (roll > 6) {
      reject(new Error('Oops... Die rolled off the table.'));
      return;
    }

    // Use callback to communicate the final die value once finished rolling
    if (roll === totalRolls) {
      resolve(value);
      return;
    }

    // Schedule the next roll todo until no more rolls to do
  
      setTimeout(() => rollOnce(roll + 1, totalRolls).then(resolve).catch(reject), 500);
    });
   

  // Start the initial roll

  

 }

function main() {
rollDie()
.then((message)=>console.log(message))
.catch((error) => console.log(error.message));
  
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

/*
Does the problem described above still occur? If not, what would be your
  explanation?
*/

/*
no it's not
because we can manage the completion state (either resolved or rejected)
 of each individual operation without interference from others.
*/