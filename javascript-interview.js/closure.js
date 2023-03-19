function student() {
    let firstName = 'Masai';
    
    setTimeout(()=>{
      console.log('from setTimeouts CB:', firstName);
    },2000)
    
    return firstName; 
  }
  
  console.log('student Invoked:' , student())