const sum = (a,b) => {
 console.log(a+b);
};
sum(2,8);

const cube = (n) => {
 return n*n*n;
};

// implicit return== automatic returns  arrow functions
const mul = (a,b) => (
 a*b
) ;
mul(2,9); 
//               () => { }

// arrow functions with this keywords used for parent scope 
const student = {
 name : "puja",
 marks : 90,
 property : this , 
 getName: function(){
  console.log(this);
  return this.name;
 },
};
student.getName();
