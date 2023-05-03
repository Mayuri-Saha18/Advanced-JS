const myObj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Check if the object has a "name" property
  if (myObj.hasOwnProperty("name")) {
    console.log("The object has a 'name' property.");
  } else {
    console.log("The object does not have a 'name' property.");
  }
  
  // Check if the object has a "country" property
  if (myObj.hasOwnProperty("country")) {
    console.log("The object has a 'country' property.");
  } else {
    console.log("The object does not have a 'country' property.");
  }