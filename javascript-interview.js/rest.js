// The rest operator is used to represent an indefinite number of arguments as an array. It is typically used as a parameter in a function definition to allow for a variable number of arguments to be passed to the function.

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  let { name, ...rest } = person;
  
  console.log(name)
  console.log(rest)

function sum(...numbers) { 
    /*collect remaining arguments as 
    an array*/
        //console.log(numbers)
      let total = 0;
      for (let num of numbers) {
        total += num;
      }
      return total;
    }
    console.log(sum(5, 6, 3, 4)); 
    /* pass a variable number of 
    arguments to function */